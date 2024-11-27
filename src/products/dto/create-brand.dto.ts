import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { Filestore } from "src/filestore/entities/filestore.entity";

export class CreateBrandDto {
  @ApiProperty({ description: "Name of the brand", example: "Apple" })
  name: string;

  @ApiProperty({ required: false, description: "Logo of the brand" })
  @IsOptional()
  @ValidateNested()
  @Type(() => Filestore)
  logo?: Filestore;
}
