import { BaseEntity } from "src/common/db/base.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductVariant } from "./productVariant.entity";

@Entity()
export class Variant extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  value: string;

  @Column()
  html: string;

  @ManyToOne(() => ProductVariant, (product) => product.variant)
  productVariant: ProductVariant[];
}
