import { APP_GUARD } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { LoggerModule } from "./core/logger/logger.module";
import { DefaultModule } from "./default/default.module";
import { AuthModule } from "./auth/auth.module";

import { AuthGuard } from "./core/guard";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, envFilePath: ".env" }),

        LoggerModule,
        DefaultModule,
        AuthModule,
    ],
    controllers: [],
    providers: [
        { provide: APP_GUARD, useClass: AuthGuard },
    ]
})
export class AppModule { }
