import "reflect-metadata";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class System {

    @Field(() => System, {
        nullable: true,
    })
    public uid: string | null = null;

    @Field(() => System, {
        nullable: true,
    })
    public name: string | null = null;
}