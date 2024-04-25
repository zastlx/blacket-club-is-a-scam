import { Body, Controller, Delete, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto, LoginDto } from "./dto";
import { Public, RealIp } from "src/core/decorator";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("register")
    register(@Body() dto: RegisterDto, @RealIp() ip: string) {
        return this.authService.register(dto, ip);
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("login")
    login(@Body() dto: LoginDto, @RealIp() ip: string) {
        return this.authService.login(dto, ip);
    }
}

