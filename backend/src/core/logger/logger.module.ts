import { Module } from "@nestjs/common";
import { BLoggerService } from "./logger.service";

@Module({
    providers: [BLoggerService],
    exports: [BLoggerService]
})
export class LoggerModule {}
