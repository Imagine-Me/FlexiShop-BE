import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { DatabaseModule } from "../database/database.module";
import { AuthenticationService } from "../authentication/authentication.service";

@Module({
  imports: [TypeOrmModule.forFeature([User]), DatabaseModule],
  controllers: [UserController],
  providers: [UserService, AuthenticationService],
  exports: [UserService],
})
export class UserModule {}
