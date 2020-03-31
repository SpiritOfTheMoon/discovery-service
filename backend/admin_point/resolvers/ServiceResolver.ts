import "reflect-metadata";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Service } from "../objects/Service";
import { ServiceConnection } from "../objects/connection/ServiceConnection";

@Resolver()
export class ServiceResolver {

    @Query(() => ServiceConnection, {
        nullable: true,
    })
    public async services(): Promise<ServiceConnection> {
        throw new Error();
    }

    @Mutation(() => Service, {
        nullable: false,
    })
    public async createService(
        @Arg("name", {
            nullable: false,
        })
        name: string,
    ): Promise<Service> {
        throw new Error(`${name}`);
    }

    @Mutation(() => Service, {
        nullable: false,
    })
    public async deleteService(
        @Arg("serviceId", {
            nullable: false,
        })
        serviceId: string,
    ): Promise<Service> {
        throw new Error(`${serviceId}`);
    }
}
