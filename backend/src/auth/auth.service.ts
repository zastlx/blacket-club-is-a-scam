import { Injectable } from "@nestjs/common";
import { RegisterDto, LoginDto } from "./dto";

import { BadRequest, NotFound } from "src/types/enums";

@Injectable()
export class AuthService {

    constructor(
    ) { }

    async onModuleInit() {
    }

    async register(dto: RegisterDto, ip: string) {
        return "fart";
    }

    async login(dto: LoginDto, ip: string) {
        return "asd";
    }

    async logout(userId: string) {
        return "fart";
    }
}
