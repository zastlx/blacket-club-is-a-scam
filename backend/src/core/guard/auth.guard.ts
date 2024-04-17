import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "../decorator";



@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext) {
        if (this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass()
        ])) return true;

        const request: Request = context.switchToHttp().getRequest();

        const token = this.extractTokenFromHeader(request);

        if (!token) throw new UnauthorizedException();

        try {
            const decodedToken = JSON.parse(Buffer.from(token, "base64").toString());
            const session = null;
            // const session: Session = JSON.parse();
            if (!session) throw new UnauthorizedException();

            if (decodedToken.id !== session.id) throw new UnauthorizedException();

            request["session"] = session;
        } catch {
            throw new UnauthorizedException();
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        return request.headers.authorization ?? undefined;
    }
}
