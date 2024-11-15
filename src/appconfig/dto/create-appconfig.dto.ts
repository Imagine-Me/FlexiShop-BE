import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, IsString } from "class-validator";

export class CreateAppconfigDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsJSON()
  data: any;
}
