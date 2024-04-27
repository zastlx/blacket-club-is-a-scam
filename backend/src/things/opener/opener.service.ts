import { BadRequestException, ConflictException, Injectable } from "@nestjs/common";
import { Account } from "@prisma/client";
import { AccountService } from "src/account/account.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UserService } from "src/user/user.service";

interface ActiveOpens {
    user: Account;
    opened: number;
    total: number | null;
    serviceId: string;
}

@Injectable()
export class OpenerService {
    constructor(
        private prisma: PrismaService,
        private userService: UserService,
        private accountService: AccountService
    ) { }
    public memoryOpens: { [userId: string]: ActiveOpens[] } = {};
    readonly openerServiceId = "clvhdte0i000011nd20o28uq1";

    // actual opening
    async startOpening(index: number) {
        const open = this.memoryOpens[index];

    }

    // utils
    async getUserActiveServices(userId: string) {
        return (await this.prisma.user.findUniqueOrThrow({
            where: {
                id: userId
            },
            include: {
                activeServices: {
                    include: {
                        service: true
                    }
                }
            }
        })).activeServices.map(({ serviceId, ...rest }) => rest);
    }

    async getServiceById(serviceId: string) {
        return await this.prisma.services.findUnique({
            where: {
                id: serviceId
            }
        });
    }

    // endpoints
    async status(userId: string) {
        return await this.getUserActiveServices(userId);
    }

    async requestOpen(userId: string, accountId: string) {
        if (!this.memoryOpens[userId]) this.memoryOpens[userId] = [];
        if (this.memoryOpens[userId].length == 1 && !this.userService.hasPremium(userId)) throw new ConflictException("Only premium users can have more than one active opener.");
        const account = await this.accountService.getAccountById(accountId);
        if (!account || account.userId !== userId) throw new BadRequestException("Account not found.");

        const service = await this.prisma.ongoingServices.create({
            data: {
                service: {
                    connect: {
                        id: this.openerServiceId
                    }
                },
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        });

        this.memoryOpens[userId].push({
            user: account,
            opened: 0,
            total: null,
            serviceId: service.id
        });

        this.startOpening(this.memoryOpens[userId].length - 1);
    }
}
