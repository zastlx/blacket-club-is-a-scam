import { Injectable } from "@nestjs/common";
import { Server } from "socket.io";
import { AuthService } from "src/auth/auth.service";
import { Socket } from "src/types/socket";

enum Messages {
    Authorized = "0",
    Unauthorized = "1",
}

@Injectable()
export class SocketService {
    constructor(
        private authSerivce: AuthService
    ) { }
    public server: Server;

    async test(socket: Socket, data: string) {
        socket.emit("test", socket.session);
        console.log(data);
        return data;
    }

    async emitMessageAndCloseSocket(client: Socket, message: string, data?: any) {
        client.emit(message, data);
        client.disconnect(true);
    }

    async verifyConnection(client: Socket) {
        const token = client.handshake.auth.token as string | null;
        if (!token) return this.emitMessageAndCloseSocket(client, Messages.Unauthorized);

        const session = await this.authSerivce.findSession(token);
        if (!session) return this.emitMessageAndCloseSocket(client, Messages.Unauthorized);

        client.session = session;
        //console.log("varifycon")
        return client.emit
    }
}
