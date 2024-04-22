import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { Public, RealIp } from "src/core/decorator";
import BRequest from "src/types/request";

@Controller("user")
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Get("me")
    register(@Req() request: BRequest) {
        return this.userService.me(request);
    }
}

