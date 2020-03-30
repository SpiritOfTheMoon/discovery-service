import "reflect-metadata";
import { genericConnection } from "./genericConnection";
import { Service } from "../Service";
import { ObjectType } from "type-graphql";

@ObjectType()
export class ServiceConnection extends genericConnection(Service) {

}