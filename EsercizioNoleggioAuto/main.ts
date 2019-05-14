import * as auto from "./Auto";
import * as parco from "./ParcoMacchine";
import * as cliente from "./Cliente";

const PM1=new parco.ParcoMacchine();
const A1=new auto.Auto("AAA","1");
const A2=new auto.Auto("BBB","2");
const A3=new auto.Auto("CCC","3");
const C1=new cliente.Cliente(1,"Mario","Rossi");
const C2=new cliente.ClienteBusiness(2,"Luca","Bianchi",1000);
PM1.addAuto(A1);
PM1.addAuto(A2);
PM1.addAuto(A3);
PM1.mostraAuto();
console.log(C2.getSconto());