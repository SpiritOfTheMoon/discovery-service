import "reflect-metadata";
import { genericEdge } from "./genericEdge";
import { ObjectType } from "type-graphql";
import { Config } from "../Config";

@ObjectType({
})
export class ConfigEdge extends genericEdge(Config) {

}