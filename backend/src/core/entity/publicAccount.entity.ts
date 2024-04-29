import { Account } from "@prisma/client";
import { Exclude } from "class-transformer";

export class PublicAccount implements Account {
    id: string;
    username: string;
    userId: string;

    @Exclude()
    session: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<PublicAccount>) {
        Object.assign(this, partial);

        this.password = undefined;
        this.session = undefined;
    }
}
