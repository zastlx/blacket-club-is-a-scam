import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service"

// import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import BRequest from "src/types/request";
import { PublicUser } from "src/core/entity/publicUser.entity";

@Injectable() //
export class UserService {
    constructor(
        private prisma: PrismaService
    ) { }

    async me(req: BRequest) {
        return new PublicUser(await this.getUserById(req.session.userId));
    }

    async getUserById(id: string) {
        return await this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }
}
