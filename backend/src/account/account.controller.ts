import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AccountService } from "./account.service";
import { GetCurrentUserId } from "src/core/decorator";
import { addAccountDto } from "./dto";

@Controller("account")
export class AccountController {
    constructor(
        private readonly accountService: AccountService,
    ) { }


    @Get("/")
    status(@GetCurrentUserId() userId: string) {
        return this.accountService.getAccounts(userId);
    }

    @Post("/")
    add(@GetCurrentUserId() userId: string, @Body() dto: addAccountDto) {
        return this.accountService.addAccount(userId, dto);
    }

    @Delete("/:id")
    delete(@GetCurrentUserId() userId: string, @Param("id") id: string) {
        return this.accountService.deleteAccount(userId, id);
    }
}
