import { performance } from "perf_hooks";
import DataLoader from "dataloader";
import { ConfigEdge } from "./edge/ConfigEdge";

export class Context {
    public start: number;
    constructor() {
        this.start = performance.now();
    }
    public serviceConfigsLoader!: DataLoader<string, ConfigEdge[]>;
}