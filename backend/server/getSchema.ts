import "reflect-metadata";
import { GraphQLSchema } from "graphql";
import { buildSchemaSync } from "type-graphql";

export function getSchema(resolvers: Array<Function | string>, name: string): GraphQLSchema {
    const schema = buildSchemaSync({
        emitSchemaFile: `../schema_${name}.gql`,
        resolvers,
    });
    return schema;
}