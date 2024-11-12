import { PartialType } from "@nestjs/mapped-types";
import { CreateFilestoreDto } from "./create-filestore.dto";

export class UpdateFilestoreDto extends PartialType(CreateFilestoreDto) {}
