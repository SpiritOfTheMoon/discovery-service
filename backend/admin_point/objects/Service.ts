import "reflect-metadata";
import { ObjectType, Field, Ctx } from "type-graphql";
import { Context } from "./Context";
import { ConfigConnection } from "./connection/ConfigConnection";
import { ConfigEdge } from "./edge/ConfigEdge";

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
