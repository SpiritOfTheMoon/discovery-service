import "reflect-metadata";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class PageInfo {

    @Field(() => Boolean, {
        nullable: false,
    })
    public hasNextPage: boolean;

    @Field(() => Boolean, {
        nullable: false,
    })
    public hasPreviousPage: boolean;

    @Field(() => String, {
        nullable: true,
    })
    startCursor: string | null = null;

    @Field(() => String, {
        nullable: true,
    })
    endCursor: string | null = null;

    constructor(
        hasNextPage: boolean,
        hasPreviousPage: boolean,
        startCursor: string | null = null,
        endCursor: string | null = null,
    ) {
        this.endCursor = endCursor;
        this.hasNextPage = hasNextPage;
        this.hasPreviousPage = hasPreviousPage;
        this.startCursor = startCursor;
    }
}