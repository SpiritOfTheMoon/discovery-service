import "reflect-metadata";
import { getSchema } from "../server/getSchema";
import { GraphQLSchema } from "graphql";
import { SystemResolver } from "./resolvers/SystemResolver";

const resolvers: Array<Function | string> = [
    SystemResolver,
];
export const schemaAP: GraphQLSchema = getSchema(resolvers);