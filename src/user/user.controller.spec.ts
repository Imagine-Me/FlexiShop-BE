import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { createMock } from "@golevelup/ts-jest";
import { DatabaseModule } from "../database/database.module";
import { JwtService } from "@nestjs/jwt";
import { AuthenticationService } from "../authentication/authentication.service";

describe("UserController", () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [UserController],
      providers: [
        UserService,
        JwtService,
        AuthenticationService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: DataSource,
          useValue: createMock<DataSource>(),
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
