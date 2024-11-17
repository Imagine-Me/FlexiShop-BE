import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Appconfig } from "./entities/appconfig.entity";
import { Repository } from "typeorm";
import { CustomException } from "src/common/error/error";
import { httpErrors } from "src/constants/errors.constant";
import appConfig from "src/seedData/appConfig";
import { CreateAppconfigDto } from "./dto/create-appconfig.dto";

@Injectable()
export class AppconfigService implements OnModuleInit {
  constructor(
    @InjectRepository(Appconfig)
    private readonly appConfigRepository: Repository<Appconfig>,
  ) {}

  async onModuleInit() {
    await this.initialize();
  }

  async initialize() {
    for (const config of appConfig) {
      const row = await this.findOne(config.name);
      if (row) {
        console.log(`Appconfig ${config.name} is already created`);
        continue;
      }
      await this.create(config);
      console.log(`Appconfig ${config.name} created`);
    }
  }

  create(data: CreateAppconfigDto) {
    const row = this.appConfigRepository.create(data);
    return this.appConfigRepository.save(row);
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
