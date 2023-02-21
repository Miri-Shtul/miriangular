import { Person } from "./person";

export class ResultList{
    constructor(public correctId:Person[],public disCorrectId:Person[]){

    }
}