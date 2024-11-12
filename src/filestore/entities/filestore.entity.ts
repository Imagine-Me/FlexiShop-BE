import { BaseEntity } from "src/common/db/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("filestore")
export class Filestore extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  url: string;

  @Column()
  name: string;
}
