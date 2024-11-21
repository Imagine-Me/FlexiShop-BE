import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { TemplatesService } from "./templates.service";
import { CreateTemplateDto } from "./dto/create-template.dto";
import { UpdateTemplateDto } from "./dto/update-template.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UpdateHeaderDto } from "./dto/update-header.dto";
import { UpdateFooterDto } from "./dto/update-footer.dto";
import { Roles } from "src/decorator/role.decorator";
import { UserRole } from "src/user/role";
import { RoleGuard } from "src/guards/role.guard";
import { AuthGuard } from "src/authentication/authentication.guard";

@Controller("templates")
@ApiTags("Templates")
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post()
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  create(@Body() createTemplateDto: CreateTemplateDto) {
    return this.templatesService.create(createTemplateDto);
  }

  @Get()
  findAll() {
    return this.templatesService.findAll();
  }

  @Get("/components")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  getComponents() {
    return this.templatesService.getComponents();
  }

  @Get(":name")
  findOne(@Param("name") name: string) {
    return this.templatesService.findOne(name);
  }

  @Post("/header/:name")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  updateHeader(@Param("name") name: string, @Body() header: UpdateHeaderDto) {
    return this.templatesService.updateHeader(name, header);
  }

  @Post("/footer/:name")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  updateFooter(@Param("name") name: string, @Body() footer: UpdateFooterDto) {
    return this.templatesService.updateFooter(name, footer);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTemplateDto: UpdateTemplateDto,
  ) {
    return this.templatesService.update(+id, updateTemplateDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.templatesService.remove(+id);
  }
}
