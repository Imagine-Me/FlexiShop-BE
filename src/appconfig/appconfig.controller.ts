import {
  Controller,
  Get,
  Patch,
  Param,
  Delete,
  UseGuards,
  Body,
} from "@nestjs/common";
import { AppconfigService } from "./appconfig.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/authentication/authentication.guard";
import { RoleGuard } from "src/guards/role.guard";
import { Roles } from "src/decorator/role.decorator";
import { UserRole } from "src/user/role";
import { CustomException } from "src/common/error/error";
import { httpErrors } from "src/constants/errors.constant";
import { UpdateAppconfigDto } from "./dto/update-appconfig.dto";

@Controller("appconfig")
@ApiTags("App Config")
export class AppconfigController {
  constructor(private readonly appconfigService: AppconfigService) {}

  @Get()
  findAll() {
    return this.appconfigService.findAll();
  }

  @Get(":name")
  findOne(@Param("name") name: string) {
    return this.appconfigService.findOne(name);
  }

  @Roles([UserRole.ADMIN])
  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth()
  @Patch(":name")
  update(@Param("name") name: string, @Body() { data }: UpdateAppconfigDto) {
    if (!data) throw new CustomException(httpErrors.BAD_REQUEST);
    return this.appconfigService.update(name, data);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.appconfigService.remove(+id);
  }
}
