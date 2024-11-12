import { PartialType } from "@nestjs/mapped-types";
import { CreateAppconfigDto } from "./create-appconfig.dto";
import { IsObject } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import * as palettes from "../constants";

export class UpdateAppconfigDto extends PartialType(CreateAppconfigDto) {
  @ApiProperty({ example: palettes })
  @IsObject()
  data: JSON;
}
