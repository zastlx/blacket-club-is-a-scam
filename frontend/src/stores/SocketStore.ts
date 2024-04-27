import { action, observable } from "mobx";
import { Socket, io } from "socket.io-client";
// @ts-ignore
window.io = io;
class SocketStore {
    @observable public socket: Socket | null = null;

    @action connect = () => {
        if (this.socket) return;
        this.socket = io("http://localhost:3000/", { path: "/api/gateway", auth: { token: localStorage.getItem("token") }, transports: ["websocket"] });
    };

    @action disconnect = () => {
        if (!this.socket) return;
        this.socket.disconnect();
        this.socket = null;
    };
}

const socketStore = new SocketStore();
export default socketStore;
// @ts-ignore
window.ss = socketStore;
