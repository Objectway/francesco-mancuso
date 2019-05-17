import {Auto} from "./Auto";
import {ParcoMacchine} from "./ParcoMacchine";
import {Cliente} from "./Cliente";
import {ClienteBusiness} from "./Cliente"


const PM1:ParcoMacchine<Auto>=new ParcoMacchine();
const A1:Auto=new Auto("AAA","1","blu");
const A2:Auto=new Auto("BBB","2","nera");
const A3:Auto=new Auto("CCC","3","fucsia");
const C1:Cliente=new Cliente(1,"Mario","Rossi");
const C2:ClienteBusiness=new ClienteBusiness(2,"Luca","Bianchi",1000);
PM1.addAuto(A1);
PM1.addAuto(A2);
PM1.addAuto(A3);
// PM1.mostraAuto();
// console.log(C2.getSconto());
C1.verificaBusiness();
