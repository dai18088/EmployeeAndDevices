export class Device{
    id: string;
    serialNumber: string;
    description: string;
    type: number;

    constructor(id: string, serialNumber: string, description: string, type: number){
        this.id=id;
        this.serialNumber = serialNumber;
        this.description = description;
        this.type = type;
    }
}