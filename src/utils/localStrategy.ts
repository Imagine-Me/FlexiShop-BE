import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthenticationService } from "src/authentication/authentication.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthenticationService) {
    super({
      usernameField: "email",
    });
  }

  async validate(email: string, password: string) {
    console.log("Inside local Strategy method");
    console.log(password);
    const user = await this.authService.validateUser(email, password);
    if (!user) throw new UnauthorizedException();
    else return user;
  }
}
