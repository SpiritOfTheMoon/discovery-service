import "reflect-metadata";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Config {

    @Field(() => String, {
        nullable: false,
    })
    public name: string;

    @Field(() => String, {
        nullable: false,
    })
    public value: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }

}