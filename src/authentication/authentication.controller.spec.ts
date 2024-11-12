import { Test, TestingModule } from "@nestjs/testing";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { DatabaseModule } from "../database/database.module";
import { User } from "../user/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

describe("AuthenticationController", () => {
  let controller: AuthenticationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([User]), DatabaseModule],
      controllers: [AuthenticationController],
      providers: [AuthenticationService, UserService, JwtService],
    }).compile();

    controller = module.get<AuthenticationController>(AuthenticationController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
