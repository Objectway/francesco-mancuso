///<reference path="./test.d.ts"/>
import * as data from "./clienti.json"

export class Cliente{
    id:number;
    name:string;
    surname:string;
    constructor(id:number,name:string,surname:string){
        this.id=id;
        this.name=name;
        this.surname=surname;
    }
    verificaBusiness(){
        console.log(data[0]);
    }
}
export class ClienteBusiness extends Cliente{
    spesaannua:number;
    constructor(id:number,name:string,surname:string,spesaannua:number){
        super(id,name,surname);
        this.spesaannua=spesaannua;
    }
    getSconto(){
        return (0.1*this.spesaannua);
    }
}