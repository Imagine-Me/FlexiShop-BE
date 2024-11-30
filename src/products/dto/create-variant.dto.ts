import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class CreateVariantDto {
  @ApiProperty({ description: "Name of the Variant", example: "Color or Size" })
  name: string;

  @ApiProperty({ description: "Value of variant", example: "Blue, Red" })
  value: string;

  @ApiProperty({
    description: "HTML for the variant to show in app",
    example: "<div></div>",
  })
  @IsOptional()
  html: string;
}
