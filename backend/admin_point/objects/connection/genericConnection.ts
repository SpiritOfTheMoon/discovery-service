import "reflect-metadata";
import { PageInfo } from "../PageInfo";
import { Field, ObjectType, ClassType } from "type-graphql";

export function genericConnection<TItem>(TItemClass: ClassType<TItem>) {
    @ObjectType({
        isAbstract: true,
    })
    abstract class Connection {
        @Field(() => [TItemClass], {
        })
        public edges: TItem[];
        @Field(() => PageInfo, {
        })
        public pageInfo: PageInfo;
    }
    return Connection;
}