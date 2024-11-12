import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { plainToInstance } from "class-transformer";
import { UserService } from "../user/user.service";
import { comparePasswords } from "../utils/bcrypt";
import { jwtConstants } from "./constants";
import { UserDetailsDto } from "./dto/user.dto";
import { UserRole } from "src/user/role";
import { CustomException } from "src/common/error/error";
import { httpErrors } from "src/constants/errors.constant";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findOneWithEmail(username);
    if (userDB) {
      const matched = comparePasswords(password, userDB.password);
      if (matched) {
        return userDB;
      } else {
        return null;
      }
    }
    return null;
  }

  async adminLogin(username: string, pwd: string) {
    const user = await this.validateUser(username, pwd);
    if (user.role !== UserRole.ADMIN) {
      throw new CustomException(httpErrors.FORBIDDEN_ERROR);
    }
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: jwtConstants.secret,
      }),
      user: plainToInstance(UserDetailsDto, user),
    };
  }
}
