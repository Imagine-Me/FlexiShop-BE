import { Injectable, OnModuleInit } from "@nestjs/common";
import { CreateTemplateDto } from "./dto/create-template.dto";
import { UpdateTemplateDto } from "./dto/update-template.dto";

import templates from "src/seedData/templates";
import { InjectRepository } from "@nestjs/typeorm";
import { Template } from "./entities/template.entity";
import { Repository } from "typeorm";

@Injectable()
export class TemplatesService implements OnModuleInit {
  constructor(
    @InjectRepository(Template)
    private readonly templateRepository: Repository<Template>,
  ) {}

  async onModuleInit() {
    await this.initialize();
  }

  async initialize() {
    for (const template of templates) {
      const row = await this.findOne(template.name);
      if (row) {
        console.log(`Template ${template.name} is already created`);
        continue;
      }
      await this.create(template);
      console.log(`Template ${template.name} created successfully`);
    }
  }

  create(createTemplateDto: CreateTemplateDto) {
    const row = this.templateRepository.create(createTemplateDto);
    return this.templateRepository.save(row);
  }

  findAll() {
    return `This action returns all templates`;
  }

  findOne(name: string) {
    return this.templateRepository.findOne({ where: { name } });
  }

  update(id: number, updateTemplateDto: UpdateTemplateDto) {
    return `This action updates a #${id} template ${updateTemplateDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} template`;
  }
}
