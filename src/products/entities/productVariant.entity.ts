import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "./product.entity";
import { BaseEntity } from "src/common/db/base.entity";
import { Filestore } from "src/filestore/entities/filestore.entity";
import { Variant } from "./variant.entity";

@Entity()
export class ProductVariant extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Product, (product) => product.variants)
  product: Product;

  @ManyToOne(() => Variant, (variant) => variant.productVariant, {
    cascade: true,
    onDelete: "CASCADE",
  })
  variant: Variant;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column("int")
  stock: number;

  @Column("text", { nullable: true })
  specifications: string;

  @Column("simple-json", { nullable: true })
  images: Partial<Filestore>[];
}
