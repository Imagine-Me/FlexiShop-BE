import { Exclude, Expose, Transform } from "class-transformer";

export class UserDetailsDto {
  @Exclude()
  password: string;

  @Exclude()
  id: string;

  @Exclude()
  createdAt: string;

  @Exclude()
  updatedAt: string;

  @Expose()
  @Transform(({ obj }) => `${obj.firstName} ${obj.lastName}`)
  fullName: string;
}
