import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Appconfig } from "./entities/appconfig.entity";
import { Repository } from "typeorm";
import * as configSeedData from "./constants";
import { CustomException } from "src/common/error/error";
import { httpErrors } from "src/constants/errors.constant";

@Injectable()
export class AppconfigService implements OnModuleInit {
  constructor(
    @InjectRepository(Appconfig)
    private readonly appConfigRepository: Repository<Appconfig>,
  ) {}

  async onModuleInit() {
    await this.create();
  }

  async create() {
    try {
      const palettePromises = configSeedData.data.map(
        async (config: { name: string; data: object }) => {
          const dbPalette = await this.appConfigRepository.findOneBy({
            name: config.name,
          });
          if (dbPalette) {
            console.log("Data already present for ", config.name);
            return null;
          } else {
            console.log("Data inserting for ", config.name);
            const newPalette = this.appConfigRepository.create(config);
            return this.appConfigRepository.save(newPalette);
          }
        },
      );

      // Wait for all the promises to resolve
      await Promise.all(palettePromises);
      console.log("All palettes processed.");
    } catch (error) {
      console.error("Error seeding palettes: ", error);
    }
  }

  findAll() {
    return this.appConfigRepository.find();
  }

  findOne(name: string) {
    return this.appConfigRepository.findOneBy({ name });
  }

  async update(name: string, data: JSON) {
    const appconfig = await this.appConfigRepository.findOneBy({ name });
    if (!appconfig) throw new CustomException(httpErrors.BAD_REQUEST);
    const result = await this.appConfigRepository.update(appconfig?.id, {
      ...appconfig,
      data: data,
      version: appconfig.version + 1,
    });
    if (result.affected) return result.affected + " rows affected";
    else throw new CustomException(httpErrors.NOT_MODIFIED);
  }

  remove(id: number) {
    return `This action removes a #${id} appconfig`;
  }
}
