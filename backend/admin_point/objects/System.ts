import "reflect-metadata";
import { ObjectType, Field } from "type-graphql";
import { Config } from "./Config";

@ObjectType()
export class System {

    @Field(() => String, {
        nullable: true,
    })
    public uid: string | null = null;

    @Field(() => String, {
        nullable: true,
    })
    public name: string | null = null;

    @Field(() => [Config], {
        nullable: true,
    })
    public async configs(): Promise<Config[]> {
        return [];
    };

}
