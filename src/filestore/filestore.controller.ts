import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  UseGuards,
} from "@nestjs/common";
import { FilestoreService } from "./filestore.service";
import { CreateFilestoreDto } from "./dto/create-filestore.dto";
import { UpdateFilestoreDto } from "./dto/update-filestore.dto";
import { FilesInterceptor } from "@nestjs/platform-express";
import { ApiBearerAuth, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { filesInterceptor } from "./filestore";
import { Roles } from "src/decorator/role.decorator";
import { RoleGuard } from "src/guards/role.guard";
import { UserRole } from "src/user/role";
import { AuthGuard } from "src/authentication/authentication.guard";

@Controller("filestore")
@ApiTags("Filestore")
export class FilestoreController {
  constructor(private readonly filestoreService: FilestoreService) {}

  @ApiConsumes("multipart/form-data")
  @Post("upload")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @UseInterceptors(FilesInterceptor("files", 5, filesInterceptor("image")))
  create(
    @Body() createFilestoreDto: CreateFilestoreDto,
    @UploadedFiles()
    files?: Array<Express.Multer.File>,
  ) {
    return this.filestoreService.create(createFilestoreDto, files);
  }

  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.filestoreService.findAll();
  }

  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Get(":name")
  findByTag(@Param("name") name: string) {
    return this.filestoreService.findByTags(name);
  }

  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateFilestoreDto: UpdateFilestoreDto,
  ) {
    return this.filestoreService.update(+id, updateFilestoreDto);
  }

  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.filestoreService.remove(+id);
  }
}
