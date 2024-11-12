import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import * as dotenv from "dotenv";

dotenv.config();

export const ormConfig: MysqlConnectionOptions = {
  host: process.env.DB_HOST || "localhost",
  type: "mysql",
  port: +(process.env.DB_PORT ?? 3306),
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "test",
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
  migrations: ["dist/database/migrations/*.js"],
};
