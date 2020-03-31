import "reflect-metadata";
import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { ServiceConnection } from "../objects/connection/ServiceConnection";
import { Config } from "../objects/Config";

@Resolver()
export class ConfigResolver {

    @Query(() => Config, {
        nullable: true,
    })
    public async config(
        @Arg("configId", () => String, {
            nullable: false,
        })
        configId: string,
    ): Promise<ServiceConnection> {
        throw new Error(`${configId}`);
    }

    @Mutation(() => Config, {
        nullable: false,
    })
    public async createConfig(
        @Arg("serviceId", {
            nullable: false,
        })
        serviceId: string,

        @Arg("name", {
            nullable: false,
        })
        name: string,

        @Arg("value", {
            nullable: false,
        })
        value: string,
    ): Promise<Config> {
        throw new Error(`${serviceId} ${name} ${value}`)
    }

    @Mutation(() => Config, {
        nullable: false,
    })
    public async deleteConfig(
        @Arg("configId", {
            nullable: false,
        })
        configId: string,
    ): Promise<Config> {
        throw new Error(`${configId}`);
    }
}
