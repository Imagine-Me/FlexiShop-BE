import { IFooter } from "src/interface/components/footer.interface";
import { IHeader } from "src/interface/components/header.interface";
import { HomeComponents } from "src/interface/components/home.interface";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Template extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column("json")
  theme: object;

  @Column("json")
  header: IHeader;

  @Column("json")
  footer: IFooter;

  @Column("json")
  home: HomeComponents;
}
