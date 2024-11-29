import { BaseEntity } from "src/common/db/base.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { IIcon } from "src/filestore/dto/icon.dto";

@Entity()
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column("simple-json", { nullable: true })
  logo: IIcon;

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];
}
