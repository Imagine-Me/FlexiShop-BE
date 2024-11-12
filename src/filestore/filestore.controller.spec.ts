import { Test, TestingModule } from "@nestjs/testing";
import { FilestoreController } from "./filestore.controller";
import { FilestoreService } from "./filestore.service";

describe("FilestoreController", () => {
  let controller: FilestoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilestoreController],
      providers: [FilestoreService],
    }).compile();

    controller = module.get<FilestoreController>(FilestoreController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
