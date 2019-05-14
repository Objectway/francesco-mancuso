export class Cliente{
    id:number;
    name:string;
    surname:string;
    constructor(id:number,name:string,surname:string){
        this.id=id;
        this.name=name;
        this.surname=surname;
    }
    verificaBusiness(cliente:Cliente){
        fetch("./clienti.json")
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