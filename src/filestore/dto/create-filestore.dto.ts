import { ApiProperty } from "@nestjs/swagger";

import { IsNotEmpty, IsString } from "class-validator";

export class CreateFilestoreDto {
  @ApiProperty({ required: false })
  @IsString()
  url: string;

  @ApiProperty({ type: "string" })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: "array",
    items: { type: "string", format: "binary" },
    required: false,
  })
  files: Array<Express.Multer.File>;
}
