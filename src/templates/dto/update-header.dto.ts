import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsString, ValidateNested } from "class-validator";
import { IIcon } from "src/filestore/dto/icon.dto";
import { Filestore } from "src/filestore/entities/filestore.entity";

export class UpdateHeaderDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => Filestore)
  logo?: Filestore;

  @ApiProperty({ required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => IIcon)
  cartIcon?: IIcon;

  @ApiProperty({ required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => IIcon)
  wishListIcon?: IIcon;

  @ApiProperty()
  @IsString()
  name: "watchHeader";

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  title?: string;
}
