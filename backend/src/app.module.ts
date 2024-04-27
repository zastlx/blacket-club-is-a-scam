import { APP_GUARD } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { DefaultModule } from "./default/default.module";
import { AuthModule } from "./auth/auth.module";

import { AuthGuard } from "./core/guard";
import { PrismaModule } from "./prisma/prisma.module";
import { UserModule } from "./user/user.module";
import { OpenerController } from "./things/opener/opener.controller";
import { OpenerModule } from "./things/opener/opener.module";
import { AccountModule } from "./account/account.module";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, envFilePath: ".env" }),

        DefaultModule,
        AuthModule,
        UserModule,
        AccountModule,
        PrismaModule,
        OpenerModule,
    ],
    controllers: [OpenerController],
    providers: [
        { provide: APP_GUARD, useClass: AuthGuard },
    ]
})
export class AppModule { }
