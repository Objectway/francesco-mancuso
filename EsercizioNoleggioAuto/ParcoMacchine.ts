export class ParcoMacchine<Auto>{
    public autoarray:Array<Auto>;
    constructor(){
        this.autoarray=[];
    }
    addAuto(auto:Auto){
        this.autoarray.push(auto);
    }
    mostraAuto(){
        return this.autoarray;
    }
}