import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appconfig extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column("json")
  data: object;

  @Column({
    nullable: false,
    default: 1,
  })
  version: number;
}
