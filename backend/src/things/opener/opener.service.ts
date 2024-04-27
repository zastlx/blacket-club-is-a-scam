import { BadRequestException, ConflictException, Injectable } from "@nestjs/common";
import { Account } from "@prisma/client";
import { AccountService } from "src/account/account.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UserService } from "src/user/user.service";

interface ActiveOpens {
    user: Account;
    opened: number;
    total: number | null;
}

@Injectable()
export class OpenerService {
    constructor(
        private prisma: PrismaService,
        private userService: UserService,
        private accountService: AccountService
    ) { }
    private memoryOpens: { [userId: string]: ActiveOpens[] } = {};

    async getServices(userId: string) {
        return this.prisma.user.findUniqueOrThrow({
            where: {
                id: userId
            },
            include: {
                activeServices: true
            }
        });
    }

    async status(userId: string) {
        return (await this.getServices(userId)).activeServices
    }

    async requestOpen(userId: string, accountId: string) {
        if (!this.memoryOpens[userId]) this.memoryOpens[userId] = [];
        if (this.memoryOpens[userId].length == 1 && !this.userService.hasPremium(userId)) throw new ConflictException("Only premium users can have more than one active opener.");
        const account = await this.accountService.getAccountById(accountId);
        if (!account) throw new BadRequestException("Account not found.");

        this.memoryOpens[userId].push({
            user: account,
            opened: Date.now(),
            total: null
        });
    }
}
