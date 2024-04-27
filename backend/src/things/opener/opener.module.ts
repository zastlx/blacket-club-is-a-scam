import { Module } from "@nestjs/common";
import { OpenerService } from "./opener.service";
import { OpenerController } from "./opener.controller";
import { UserService } from "src/user/user.service";
import { AccountService } from "src/account/account.service";

@Module({
    imports: [],
    providers: [
        OpenerService,
        UserService,
        AccountService
    ],
    controllers: [OpenerController],
    exports: [OpenerService]
})
export class OpenerModule { }
