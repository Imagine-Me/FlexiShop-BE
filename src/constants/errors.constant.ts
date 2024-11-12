import { HttpStatus } from "@nestjs/common";
import { IErrors } from "src/interface/error.interface";

export const httpErrors: Record<string, IErrors> = {
  FORBIDDEN_ERROR: {
    errorCode: HttpStatus.FORBIDDEN,
    message: "You are not allowed to access this resource",
  },
  BAD_REQUEST: {
    errorCode: HttpStatus.BAD_REQUEST,
    message: "The input is missing/No data available",
  },
  NOT_MODIFIED: {
    errorCode: HttpStatus.NOT_MODIFIED,
    message: "Data not updated",
  },
};
