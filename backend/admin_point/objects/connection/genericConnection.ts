import "reflect-metadata";
import { PageInfo } from "../PageInfo";
import { Field, ObjectType, ClassType } from "type-graphql";

export function genericConnection<TItem>(TItemClass: ClassType<TItem>) {
    @ObjectType(`${TItemClass.name}Connection`, {
        isAbstract: true,
    })
    abstract class Connection {
        @Field(() => [TItemClass], {
        })
        public edges: TItem[];
        @Field(() => PageInfo, {
        })
        public pageInfo: PageInfo;

        constructor(
            edges: TItem[],
            pageInfo: PageInfo,
        ) {
            this.edges = edges;
            this.pageInfo = pageInfo;
        }
    }
    return Connection;
}