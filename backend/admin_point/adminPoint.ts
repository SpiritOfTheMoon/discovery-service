import "reflect-metadata";
import expressGraphql from "express-graphql";
import { GraphQLSchema } from "graphql";
import { getSchema } from "../server/getSchema";
import { ServiceResolver } from "./resolvers/ServiceResolver";
import { Context } from "./objects/Context";

const resolvers: Array<Function | string> = [
    ServiceResolver,
];
const schemaAP: GraphQLSchema = getSchema(resolvers);
export const adminPoint = expressGraphql({
    schema: schemaAP,
    graphiql: true,
    context: new Context(),
});