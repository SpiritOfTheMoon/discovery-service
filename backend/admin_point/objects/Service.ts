import "reflect-metadata";
import { ObjectType, Field, Ctx, UseMiddleware } from "type-graphql";
import { Context } from "./Context";
import { ConfigConnection } from "./connection/ConfigConnection";
import { ConfigEdge } from "./edge/ConfigEdge";
import { serviceConfigsLoaderMiddleware } from "../middlewares/serviceConfigsLoaderMiddleware";

@ObjectType()
export class Service {

    @Field(() => String, {
        nullable: false,
    })
    public id!: string;

    @Field(() => String, {
        nullable: false,
    })
    public name!: string;

    @UseMiddleware(serviceConfigsLoaderMiddleware())
    @Field(() => ConfigConnection, {
        nullable: true,
    })
    public async configs(
        @Ctx()
        context: Context,
    ): Promise<ConfigConnection> {
        const edges: ConfigEdge[] = await context.serviceConfigsLoader.load(this.id);
        throw new Error(`${edges}`);
    };

}
