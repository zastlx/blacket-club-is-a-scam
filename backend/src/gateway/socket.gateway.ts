import { UseGuards } from "@nestjs/common";
import { OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { Server as eiowsServer } from "eiows";
import { SocketService } from "./socket.service";

@WebSocketGateway(0, {
    path: "/gateway",
    wsEngine: eiowsServer
})
export class SocketGateway implements OnGatewayConnection {
    constructor(
        private readonly socketService: SocketService,
    ) { }

    @WebSocketServer()
    public server: Server;

    handleConnection(client: Socket) {
        console.log("connected");
        return true;
    }

    @SubscribeMessage("test")
    async test(socket: Socket, data: string): Promise<string> {
        return await this.socketService.test(socket, data);
    }
}
