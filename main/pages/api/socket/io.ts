import { Server as SocketIOServer } from "socket.io";
import { NextApiRequest, NextApiResponse } from "next";
import { Server as NetServer } from "http";
import { Socket } from "net";

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};

const ioHandler = (_: NextApiRequest, res: NextApiResponseServerIo) => {
  if (!res.socket.server.io) {
    const path = "/api/socket/io";
    const httpServer: NetServer = res.socket.server as any;
    const io = new SocketIOServer(httpServer, {
      path: path,
      addTrailingSlash: false,
    });

    res.socket.server.io = io;
  }

  res.end();
};

export default ioHandler;
