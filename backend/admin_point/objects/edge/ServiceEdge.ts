import "reflect-metadata";
import { genericEdge } from "./genericEdge";
import { Service } from "../Service";
import { ObjectType } from "type-graphql";

@ObjectType({

})
export class ServiceEdge extends genericEdge(Service) {

}