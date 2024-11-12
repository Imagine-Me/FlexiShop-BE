import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./user/user.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { AppconfigModule } from "./appconfig/appconfig.module";
import { FilestoreModule } from "./filestore/filestore.module";
import { join } from "path";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", process.env.STATIC_FOLDER_NAME),
      serveRoot: "/static",
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    DatabaseModule,
    UserModule,
    AuthenticationModule,
    AppconfigModule,
    FilestoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
