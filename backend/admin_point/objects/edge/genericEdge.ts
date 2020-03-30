import "reflect-metadata";
import { ClassType, ObjectType, Field } from "type-graphql";

export function genericEdge<TItem>(TItemClass: ClassType<TItem>) {
    @ObjectType({
        isAbstract: true,
    })
    abstract class Edge {
        @Field(() => String, {
        })
        public cursor: string;
        @Field(() => TItemClass, {
        })
        public node: TItem;
    }
    return Edge;
}