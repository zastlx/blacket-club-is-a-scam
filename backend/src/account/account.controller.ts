import { Controller, Get, Put } from "@nestjs/common";
import { AccountService } from "./account.service";
import { GetCurrentUserId } from "src/core/decorator";

@Controller("account")
export class AccountController {
    constructor(
        private readonly accountService: AccountService,
    ) { }


    @Get("/")
    status(@GetCurrentUserId() userId: string) {
        return this.accountService.getAccounts(userId);
    }
}
