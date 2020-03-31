import "reflect-metadata";
import { ClassType, ObjectType, Field } from "type-graphql";

export function genericEdge<TItem>(TItemClass: ClassType<TItem>) {
    @ObjectType(`${TItemClass.name}Edge`, {
        isAbstract: true,
    })
    abstract class Edge {
        @Field(() => String, {
        })
        public cursor: string;
        @Field(() => TItemClass, {
        })
        public node: TItem;

        constructor(
            cursor: string,
            node: TItem,
        ) {
            this.cursor = cursor;
            this.node = node;
        }
    }
    return Edge;
}