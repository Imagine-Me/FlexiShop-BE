import { Reflector } from "@nestjs/core";
import { UserRole } from "src/user/role";

export const Roles = Reflector.createDecorator<[UserRole]>();
