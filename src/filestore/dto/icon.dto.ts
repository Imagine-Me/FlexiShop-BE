import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class IIcon {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  type: string;
}
