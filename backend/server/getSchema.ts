import "reflect-metadata";
import { GraphQLSchema } from "graphql";
import { buildSchemaSync } from "type-graphql";

export function getSchema(resolvers: Array<Function | string>): GraphQLSchema {
    const schema = buildSchemaSync({
        emitSchemaFile: "../../schema.gql",
        resolvers,
    });
    return schema;
}