import "reflect-metadata";
import { genericConnection } from "./genericConnection";
import { ObjectType } from "type-graphql";
import { Config } from "../Config";

@ObjectType()
export class ConfigConnection extends genericConnection(Config) {

}