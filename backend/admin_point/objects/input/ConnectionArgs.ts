import { Order } from "../Order";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export class ConnectionArgs {

    @Field(() => String, {
        nullable: true,
        defaultValue: null,
    })
    public after: string | null = null;

    @Field(() => String, {
        nullable: true,
        defaultValue: null,
    })
    public before: string | null = null;

    @Field(() => Int, {
        nullable: true,
        defaultValue: null,
    })
    public first: number | null = null;

    @Field(() => Int, {
        nullable: true,
        defaultValue: null,
    })
    public last: number | null = null;

    @Field(() => Order, {
        nullable: true,
        defaultValue: Order.ASC,
    })
    public order: Order = Order.ASC;

    @Field(() => String, {
        nullable: true,
        defaultValue: null,
    })
    public orderField: string | null = null;
}