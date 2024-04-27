import { Body, Controller, Get, Put } from "@nestjs/common";
import { OpenerService } from "./opener.service";
import { GetCurrentUserId } from "src/core/decorator";
import { RequestOpenDto } from "./dto";

@Controller("/things/opener")
export class OpenerController {
    constructor(
        private readonly openerService: OpenerService,
    ) { }


    @Get("/")
    status(@GetCurrentUserId() userId: string) {
        return this.openerService.status(userId);
    }

    @Put("/request")
    request(@GetCurrentUserId() userId: string, @Body() dto: RequestOpenDto) {
       return this.openerService.requestOpen(userId, dto.accountId);
    }
}
