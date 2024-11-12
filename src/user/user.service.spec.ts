import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { createMock } from "@golevelup/ts-jest";
import { DatabaseModule } from "../database/database.module";

describe("UserService", () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([User]), DatabaseModule],
      providers: [
        UserService,
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

    service = module.get<UserService>(UserService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
