import { BaseEntity } from "src/common/db/base.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category.entity";
import { Brand } from "./brand.entity";
import { Tag } from "./tag.entity";
import { ProductVariant } from "./productVariant.entity";
import { Filestore } from "src/filestore/entities/filestore.entity";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column("text")
  description: string;

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  price: number;

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  discountPrice: number;

  @Column("int", { nullable: true })
  stock: number;

  @ManyToOne(() => Category, (category) => category.products, {
    cascade: false,
  })
  category: Category;

  @ManyToOne(() => Brand, (brand) => brand.products, { cascade: false })
  brand: Brand;

  @Column("text", { nullable: true })
  specifications: string;

  @Column("simple-json", { nullable: true })
  images: Partial<Filestore>[];

  @Column({ type: "enum", enum: ["active", "draft", "archived"] })
  status: string;

  @ManyToMany(() => Tag)
  @JoinTable({
    name: "product_tags", // Name of the join table
    joinColumn: {
      name: "product_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "tag_id",
      referencedColumnName: "id",
    },
  })
  tags: Tag[];

  @OneToMany(() => ProductVariant, (variant) => variant.product, {
    cascade: true,
    onDelete: "CASCADE",
  })
  variants: ProductVariant[];

  @Column({ type: "boolean", default: false })
  isVariant: boolean;
}
