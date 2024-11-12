import { Module } from "@nestjs/common";
import { FilestoreService } from "./filestore.service";
import { FilestoreController } from "./filestore.controller";
import { MulterModule } from "@nestjs/platform-express";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Filestore } from "./entities/filestore.entity";
import { DatabaseModule } from "src/database/database.module";
import { UserModule } from "src/user/user.module";

@Module({
  controllers: [FilestoreController],
  providers: [FilestoreService],
  imports: [
    MulterModule,
    TypeOrmModule.forFeature([Filestore]),
    DatabaseModule,
    UserModule,
  ],
})
export class FilestoreModule {}
