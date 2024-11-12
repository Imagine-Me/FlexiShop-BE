import * as fs from "fs";
import { BadRequestException } from "@nestjs/common";

const fileTypes = {
  image: ["image/png", "image/jpg", "image/jpeg"],
};

export const filesInterceptor = (type: keyof typeof fileTypes) => ({
  fileFilter: (req, file, cb) => {
    fileTypes[type].includes(file.mimetype) ? cb(null, true) : cb(null, false);
  },
  MaxFileSizeValidator: (req, file, cb) => {
    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSizeInBytes) {
      return cb(
        new BadRequestException(
          `File size should not exceed ${maxSizeInBytes / (1024 * 1024)}MB`,
        ),
        false,
      );
    }
    cb(null, true);
  },
});

export const removeFile = (fullFilePath: string): void => {
  try {
    fs.unlinkSync(fullFilePath);
  } catch (err) {
    console.log(err);
  }
};
