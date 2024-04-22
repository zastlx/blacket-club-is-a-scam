import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service"
import { RegisterDto, LoginDto } from "./dto";

// import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcrypt";

@Injectable() //
export class AuthService {
    constructor(
        private prisma: PrismaService
    ) { }

    async register(dto: RegisterDto, ip: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                username: dto.username
            }
        });

        if (user) throw new BadRequestException();
        const newUser = await this.prisma.user.create({
            data: {
                username: dto.username,
                password: await hash(dto.password, 10),
                ip
            }
        });

        return (await this.findOrCreateSession(newUser.id, newUser.password)).id;
    }

    async login(dto: LoginDto, ip: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                username: dto.username
            }
        });
        if (!user) throw new NotFoundException();
        if (!(await compare(dto.password, user.password))) throw new UnauthorizedException();

        return (await this.findOrCreateSession(user.id, user.password)).id;
    }

    async logout(userId: string) {
        return await this.destroySessions(userId);
    }

    async findOrCreateSession(userId: string, password: string) {
        return await this.prisma.session.findFirst({
            where: {
                userId,
            }
        }) ?? await this.prisma.session.create({
            data: {
                userId,
                password: await hash(password, 10)
            }
        });
    }

    async findSession(id: string) {
        return await this.prisma.session.findUnique({
            where: {
                id
            }
        });
    }

    async destroySessions(userId: string) {
        return await this.prisma.session.deleteMany({
            where: {
                userId
            }
        });
    }
}
