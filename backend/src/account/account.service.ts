import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service"

// import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import BRequest from "src/types/request";
import { PublicUser } from "src/core/entity/publicUser.entity";

@Injectable() //
export class AccountService {
    constructor(
        private prisma: PrismaService
    ) { }

    async getAccounts(userId: string) {
        return await this.prisma.account.findMany({
            where: {
                userId
            }
        });
    }

    async getAccountById(id: string) {
        return await this.prisma.account.findUnique({
            where: {
                id
            }
        });
    }
}
