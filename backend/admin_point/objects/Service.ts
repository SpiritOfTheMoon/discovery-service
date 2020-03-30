import "reflect-metadata";
import { ObjectType, Field, Ctx } from "type-graphql";
import { Context } from "./Context";
import { ConfigConnection } from "./connection/ConfigConnection";

@ObjectType()
export class Service {

    @Field(() => String, {
        nullable: true,
    })
    public uid: string | null = null;

    @Field(() => String, {
        nullable: true,
    })
    public name: string | null = null;

    @Field(() => ConfigConnection, {
        nullable: true,
    })
    public async configs(
        @Ctx()
        context: Context,
    ): Promise<ConfigConnection> {
        throw new Error("qq");
    };

}
