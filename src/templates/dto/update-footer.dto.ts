import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";
import { Filestore } from "src/filestore/entities/filestore.entity";
import { LinkDto } from "src/interface/common.dto";

class LinkMenuDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty({ required: true })
  @ValidateNested()
  @IsArray()
  @Type(() => LinkDto)
  links: LinkDto[];
}

export class UpdateFooterDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => Filestore)
  logo?: Filestore;

  @ApiProperty()
  @IsString()
  name: "watchFooter";

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  copyright?: string;

  @ApiProperty()
  @IsArray()
  @ValidateNested()
  @Type(() => LinkMenuDto)
  linkMenu: LinkMenuDto[];

  //   @ApiProperty({ required: false })
  //   @IsOptional()
  //   @ValidateNested()
  //   @Type(() => IIcon)
  //   wishListIcon?: IIcon;
}
