import { Request } from "express";

export default class BRequest extends Request {
    session: {
        id: string;
        userId: string;
        password: string;
    }
}
