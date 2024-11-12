import { HttpException } from "@nestjs/common";
import { IErrors } from "src/interface/error.interface";

export class CustomException extends HttpException {
  constructor(error: IErrors) {
    super(error, error.errorCode);
  }
}
