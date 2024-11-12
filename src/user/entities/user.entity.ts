import { BaseEntity } from "../../common/db/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../role";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column({ name: "email", nullable: false, unique: true })
  email: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;
}
