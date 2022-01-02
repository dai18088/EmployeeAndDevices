import { Device } from "./device";

export class Employee {
    id:string;
    name:string;
    email:string;
    devices: Device[] = [];

    constructor(id:string,name:string,email:string){
        this.id=id;
        this.name=name;
        this.email=email;

    }
}

