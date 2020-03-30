import { Server } from "http";
import { getServer } from "./server";

const PORT = 80;

export async function runServer() {
    const server = getServer();
    server.listen(PORT, () => {
        console.log(`Сервер запустился на порту ${PORT}`);
    });
}