export class Persona{
    nome:string;
    cognome:string;
    eta:number;
    constructor(name:string,surname:string,age:number){
        this.nome=name;
        this.cognome=surname;
        this.eta=age;
    }
    getNome(){
        return this.nome;
    }
    getEta(){
        return this.eta;
    }
    setNome(nome:string){
        this.nome=nome;
    }
}
