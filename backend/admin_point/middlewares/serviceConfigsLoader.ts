import { MiddlewareFn, NextFn } from "type-graphql";
import { Context } from "../objects/Context";
import { ConfigEdge } from "../objects/edge/ConfigEdge";
import DataLoader from "dataloader";


export function serviceConfigsLoader(): MiddlewareFn<Context> {
    return ({
        root,
        args,
        context,
        info,
    }, next: NextFn) => {
        if (!context.serviceConfigsLoader) {
            const batchFunction = async (keys: ReadonlyArray<string>): Promise<ConfigEdge[][]> => {
                const results: ConfigEdge[][] = [];
                keys.map((key) => {
                    results.push([]);
                })
                return results;
            }
            context.serviceConfigsLoader = new DataLoader(batchFunction);
        }
        try {
            const nextAns = next();
            return nextAns;
        } catch (error) {
            throw error;
        }
    }
}
