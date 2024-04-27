import { Injectable } from "@nestjs/common";
import { Server, Socket } from "socket.io";

@Injectable()
export class SocketService {
    public server: Server;

    emitMessageAndCloseSocket(socket: Socket, event: string, data: any) {
        socket.emit(event, data);
        socket.disconnect();
    }

    async test(socket: Socket, data: string) {
        console.log(data);
        return data;
    }

    async verifyConnection(client: Socket) {
        // const token = client.handshake.auth.token as string | null;

        // if (!token) return this.emitMessageAndCloseSocket(client, "unauthorized", { message: "no token provided" });

        // const decodedToken = safelyParseJSON(Buffer.from(token, "base64").toString());
        // if (!decodedToken) return this.emitMessageAndCloseSocket(client, "unauthorized", { message: "invalid token" });

        // const session: Session = safelyParseJSON(await this.redisService.get(`blacket-session:${decodedToken.userId}`) as string);
        // if (!session) return this.emitMessageAndCloseSocket(client, "unauthorized", { message: "invalid session" });

        // if (decodedToken.id !== session.id) return this.emitMessageAndCloseSocket(client, "unauthorized", { message: "token mismatch" });

        // client.session = session;
        console.log("varifycon")
        return client.send("authenticated", { userId: "blooket"});
    }
}
