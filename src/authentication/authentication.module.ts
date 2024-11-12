import { Module } from "@nestjs/common";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "../utils/localStrategy";
import { DatabaseModule } from "src/database/database.module";
import { UserModule } from "src/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    DatabaseModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "6000s" },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, UserService, LocalStrategy],
})
export class AuthenticationModule {}
