import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateFilestoreDto } from "./dto/create-filestore.dto";
import { UpdateFilestoreDto } from "./dto/update-filestore.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { Filestore as FileStoreEntity } from "../filestore/entities/filestore.entity";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";
import { existsSync, mkdirSync } from "fs";
import { promises as fsPromises } from "fs";

@Injectable()
export class FilestoreService {
  constructor(
    @InjectRepository(FileStoreEntity)
    private readonly fileStoreRepository: Repository<FileStoreEntity>,
  ) {}

  async create(
    createFilestoreDto: CreateFilestoreDto,
    files?: Array<Express.Multer.File>,
  ) {
    let imageUrls: Array<string>;
    if (createFilestoreDto.url) {
      imageUrls = [createFilestoreDto.url];
    }
    if (files?.length > 0) {
      imageUrls = await this.uploadFiles(files);
    }
    if (!imageUrls) {
      throw new BadRequestException("Either files or url must be provided");
    }
    const imageEntities = imageUrls.map((url) => {
      const file = new FileStoreEntity();
      file.url = url;
      file.name = createFilestoreDto.name;
      return file;
    });
    return this.fileStoreRepository.save(imageEntities);
  }

  findAll() {
    return this.fileStoreRepository.find({ order: { createdAt: "DESC" } });
  }

  async findByTags(name: string) {
    return await this.fileStoreRepository.findBy({
      name: Like(`%${name}%`),
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} filestore`;
  }

  update(id: number, updateFilestoreDto: UpdateFilestoreDto) {
    if (updateFilestoreDto) console.log(updateFilestoreDto);
    return `This action updates a #${id} filestore`;
  }

  remove(id: number) {
    return `This action removes a #${id} filestore`;
  }

  async uploadFiles(files: Array<Express.Multer.File>) {
    // TODO: need to get this from DB
    const storageType = "local";

    if (storageType === "local") {
      return await this.uploadToLocal(files);
    }
    return [];
  }

  async uploadToLocal(files: Array<Express.Multer.File>) {
    const uploadFilePath = join(
      __dirname,
      "..",
      "..",
      process.env.STATIC_FOLDER_NAME,
    );
    if (!existsSync(uploadFilePath)) {
      mkdirSync(uploadFilePath, { recursive: true });
    }
    const imageUrls: string[] = [];
    for (const file of files) {
      const fileName = uuidv4();
      imageUrls.push(`${process.env.STATIC_URL}${fileName}`);
      const filePath = join(uploadFilePath, fileName);
      try {
        await fsPromises.writeFile(filePath, file.buffer);
      } catch (e) {
        console.error("Error writing file", e);
        throw e;
      }
    }
    return imageUrls;
  }

  uploadToS3() {}

  uploadToFireStore() {}
}
