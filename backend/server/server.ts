import express from "express";
import { createServer, Server } from "http";
import { adminPoint } from "../admin_point/adminPoint";

export function getServer(): Server {

    const app = express();
    app.use("/adminpoint", adminPoint);

    const server: Server = createServer(app);
    return server;
}

