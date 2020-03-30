import express from "express";
import { createServer, Server } from "http";
import expressGraphql from "express-graphql";
import { schemaAP } from "../admin_point/adminPoint";

export function getServer(): Server {

    const app = express();
    const adminPoint = expressGraphql({
        schema: schemaAP,
        graphiql: true,
    });
    app.use("/adminpoint", adminPoint);

    const server: Server = createServer(app);
    return server;
}

