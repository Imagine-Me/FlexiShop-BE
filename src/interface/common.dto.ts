import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LinkDto {
  @ApiProperty({ required: true })
  @IsString()
  url: string;

  @ApiProperty({ required: true })
  @IsString()
  title: string;
}
