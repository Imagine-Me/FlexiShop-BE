import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./entities/category.entity";
import { Brand } from "./entities/brand.entity";
import { Tag } from "./entities/tag.entity";
import { Product } from "./entities/product.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, Brand, Tag])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
