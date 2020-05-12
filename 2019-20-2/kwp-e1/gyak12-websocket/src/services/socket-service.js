import io from "socket.io-client";

export class SocketService {
  connect() {
    const server = process.env.REACT_APP_SOCKET_IO_SERVER;
    this.socket = io(server);
  }

  get isConnected() {
    return Boolean(this.socket);
  }
}

export const socketService = new SocketService();
