import { Test, TestingModule } from "@nestjs/testing";
import { AuthenticationService } from "./authentication.service";
import { UserService } from "../user/user.service";
import { User } from "../user/entities/user.entity";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { createMock } from "@golevelup/ts-jest";
import { DatabaseModule } from "../database/database.module";
import { JwtService } from "@nestjs/jwt";

describe("AuthenticationService", () => {
  let service: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([User]), DatabaseModule],
      providers: [
        AuthenticationService,
        UserService,
        UserService,
        JwtService,
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

    service = module.get<AuthenticationService>(AuthenticationService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
