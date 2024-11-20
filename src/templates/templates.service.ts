import { Injectable, OnModuleInit } from "@nestjs/common";
import { CreateTemplateDto } from "./dto/create-template.dto";
import { UpdateTemplateDto } from "./dto/update-template.dto";

import templates from "src/seedData/templates";
import { InjectRepository } from "@nestjs/typeorm";
import { Template } from "./entities/template.entity";
import { Repository } from "typeorm";
import { UpdateHeaderDto } from "./dto/update-header.dto";
import { UpdateFooterDto } from "./dto/update-footer.dto";

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

  async updateHeader(name: string, updateTemplateHeaderDto: UpdateHeaderDto) {
    const row = await this.findOne(name);
    if (!row) {
      throw new Error(`Template ${name} not found`);
    }
    return this.templateRepository.save({
      ...row,
      header: updateTemplateHeaderDto,
    });
  }

  async updateFooter(name: string, updateTemplateHeaderDto: UpdateFooterDto) {
    const row = await this.findOne(name);
    if (!row) {
      throw new Error(`Template ${name} not found`);
    }
    return this.templateRepository.save({
      ...row,
      footer: updateTemplateHeaderDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} template`;
  }
}
