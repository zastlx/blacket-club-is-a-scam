import { Session } from "@prisma/client";
import { Socket as SocketIO } from "socket.io";

interface Socket extends SocketIO {
    session: Session;
};

export { Socket };
