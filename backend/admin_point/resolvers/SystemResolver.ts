import "reflect-metadata";
import { Resolver, Query } from "type-graphql";
import { System } from "../objects/System";

@Resolver()
export class SystemResolver {
    @Query(() => [System], {
        nullable: true,
    })
    public async systems(): Promise<System[]> {
        const systems: System[] = [];
        systems.push({
            uid: "2",
            name: "2",
        })
        return systems;
    }
}
