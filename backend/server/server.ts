import express from "express";
import { createServer, Server } from "http";

export function getServer(): Server {

    const app = express();
    const server: Server = createServer(app);
    return server;
}

