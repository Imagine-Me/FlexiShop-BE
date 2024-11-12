import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { jwtConstants } from "src/authentication/constants";
import { Roles } from "../decorator/role.decorator";
import { UserService } from "src/user/user.service";
import { UserRole } from "src/user/role";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    try {
      const payload = this.jwtService.verify(token, {
        secret: jwtConstants.secret,
      });
      const user = await this.userService.findOneWithEmail(payload.username);
      return this.matchRoles(roles, user.role);
    } catch (e) {
      throw new UnauthorizedException("Token not Found");
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }

  private matchRoles(roles: UserRole[], userRoles: UserRole): boolean {
    return roles.includes(userRoles);
  }
}
