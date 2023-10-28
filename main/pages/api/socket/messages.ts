import { NextApiRequest, NextApiResponse } from "next";
import { NextApiResponseServerIo } from "./io";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo
) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(300).send("METHODS NOT ALLOWED");
  }

  const io = res.socket.server.io;
  io.emit("test_event", "static content");

  return res.send("wip");
}
