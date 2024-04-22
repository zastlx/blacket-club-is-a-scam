import { UserType } from "@prisma/client";
import { Exclude } from "class-transformer";

export class PublicUser {
    id: string;
    username: string;
    type: UserType;
    premium: boolean;
    createdAt: Date;

    @Exclude()
    password: string;
    @Exclude()
    ip: string;

    constructor(partial: Partial<PublicUser>) {
        Object.assign(this, partial);

        this.password = undefined;
        this.ip = undefined;
    }
}
