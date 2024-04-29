import { Global, Module } from "@nestjs/common";
import { SocketGateway } from "./socket.gateway";
import { SocketService } from "./socket.service";
import { AuthService } from "src/auth/auth.service";

@Global()
@Module({
    imports: [],
    providers: [
        SocketGateway,
        SocketService,
        AuthService
    ],
    exports: [SocketService]
})
export class SocketModule { }
