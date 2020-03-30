import { performance } from "perf_hooks";

export class Context {
    public start: number;
    constructor() {
        this.start = performance.now();
    }
}