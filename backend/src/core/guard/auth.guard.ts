import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "../decorator";
import { AuthService } from "src/auth/auth.service";
import BRequest from "src/types/request";

interface Session {
	userId: string;
	password: string;
}

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private authService: AuthService
    ) { }

    async canActivate(context: ExecutionContext) {
        if (this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass()
        ])) return true;

        const request: BRequest = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) throw new UnauthorizedException();

        const session = await this.authService.findSession(token);

        if (!session) throw new UnauthorizedException();

        request.session = session;

        return true;
    }

    private extractTokenFromHeader(request: BRequest): string | undefined {
        // @ts-ignore
        return request.headers.authorization ?? undefined;
    }
}
