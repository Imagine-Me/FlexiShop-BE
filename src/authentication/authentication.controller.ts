import { Controller, Request, Get, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "./authentication.guard";

@Controller("authentication")
@ApiTags("Authentication - Test")
export class AuthenticationController {
  constructor() {}

  @Get("profile")
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  getProfile(@Request() req) {
    console.log("Return the user profile", req.user);
    return req.user;
  }
}
