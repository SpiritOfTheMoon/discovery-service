import "reflect-metadata";
import { Resolver, Query } from "type-graphql";
import { Service } from "../objects/Service";
import { ServiceConnection } from "../objects/connection/ServiceConnection";

@Resolver()
export class ServiceResolver {
    @Query(() => ServiceConnection, {
        nullable: true,
    })
    public async systems(): Promise<ServiceConnection> {
        throw new Error();
    }
}
