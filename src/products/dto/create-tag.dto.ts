import { ApiProperty } from "@nestjs/swagger";

export class CreateTagDto {
  @ApiProperty({ description: "Name of the tag", example: "New Arrival" })
  name: string;
}
