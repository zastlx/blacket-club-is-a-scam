import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service"

// import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import BRequest from "src/types/request";
import { PublicUser } from "src/core/entity/publicUser.entity";
import { addAccountDto } from "./dto";
import axios from "axios";
import { PublicAccount } from "src/core/entity/publicAccount.entity";

@Injectable() //
export class AccountService {
    constructor(
        private prisma: PrismaService
    ) { }
    // endpoints
    async deleteAccount(userId: string, accountId: string) {
        const account = await this.getAccountById(accountId);
        if (!account) throw new NotFoundException("Account not found");
        // best practice to not expose if the account exists
        if (account.userId !== userId) throw new NotFoundException();
        await this.prisma.account.delete({
            where: {
                id: accountId
            }
        });
        return;
    }

    async addAccount(userId: string, data: addAccountDto) {
        // if (await this.prisma.account.findFirst({
        //     where: {
        //         username: data.username
        //     }
        // })) throw new BadRequestException("Account already exists.");

        const res = await axios.post("https://blacket.org/worker/login", {
            username: data.username,
            password: data.password,
            code: data.code
        });
        if (res.data.error) {
            switch (res.data.reason) {
                case "You must specify a code.":
                    throw new BadRequestException("2FA code required.");
                case "Invalid code.":
                    throw new BadRequestException("Invalid 2FA code.");
                case "Username and password don't match.":
                    throw new BadRequestException("Username and password don't match.");
                default:
                    throw new BadRequestException(res.data.reason);
            }
        }



        try {
            return new PublicAccount(await this.prisma.account.create({
                data: {
                    username: data.username,
                    password: data.password,
                    userId
                }
            }));
        } catch (e) {
            throw new BadRequestException();
        }
    }
    // other

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
