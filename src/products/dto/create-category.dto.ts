import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({ description: "Name of the category", example: "Electronics" })
  name: string;
}
