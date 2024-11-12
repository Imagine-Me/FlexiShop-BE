import { Module } from "@nestjs/common";
import { AppconfigService } from "./appconfig.service";
import { AppconfigController } from "./appconfig.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseModule } from "src/database/database.module";
import { Appconfig } from "./entities/appconfig.entity";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([Appconfig]), DatabaseModule, UserModule],
  controllers: [AppconfigController],
  providers: [AppconfigService],
  exports: [AppconfigService],
})
export class AppconfigModule {}
