import { ThemeOptions } from "@mui/material";
import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";
import watchTemplate from "src/seedData/templates/watch";

export class CreateTemplateDto {
  @ApiProperty({ example: watchTemplate })
  @IsObject()
  theme: ThemeOptions;

  @ApiProperty({ example: "Template Name" })
  @IsString()
  name: string;
}
