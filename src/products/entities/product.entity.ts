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
import { IIcon } from "src/filestore/dto/icon.dto";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column("text")
  description: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  discountPrice: number;

  @Column("int")
  stock: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @Column("text", { nullable: true })
  specifications: string;

  @Column("simple-json", { nullable: true })
  images: IIcon[];

  @Column({ type: "enum", enum: ["active", "inactive", "archived"] })
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
  })
  variants: ProductVariant[];
}
