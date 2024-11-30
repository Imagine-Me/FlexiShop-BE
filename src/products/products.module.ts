import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./entities/category.entity";
import { Brand } from "./entities/brand.entity";
import { Tag } from "./entities/tag.entity";
import { Product } from "./entities/product.entity";
import { ProductVariant } from "./entities/productVariant.entity";
import { Variant } from "./entities/variant.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Category,
      Brand,
      Tag,
      ProductVariant,
      Variant,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
