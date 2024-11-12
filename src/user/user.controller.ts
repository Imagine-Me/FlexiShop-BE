import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserLoginDto } from "./dto/userlogin.dto";
import { AuthenticationService } from "../authentication/authentication.service";
import { AuthGuard } from "../authentication/authentication.guard";
import { Roles } from "src/decorator/role.decorator";
import { RoleGuard } from "src/guards/role.guard";
import { UserRole } from "./role";

@Controller("user")
@ApiTags("User")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthenticationService,
  ) {}

  @Post("admin/login")
  async signIn(@Body() signInDto: UserLoginDto) {
    const jwtToken = await this.authService.adminLogin(
      signInDto.email,
      signInDto.password,
    );
    return jwtToken;
  }

  @Post("create")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get(":id")
  findOne(@Param("id") id: string) {
    const user = this.userService.findOne(id);
    if (user) return user;
    throw new HttpException("Customer Not Found!", HttpStatus.BAD_REQUEST);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
