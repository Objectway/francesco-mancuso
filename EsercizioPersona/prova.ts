import * as person from "./script.js";
let P1=new person.Persona("Mario","Rossi",20);
console.log(P1.getNome());
console.log("-----------------")
console.log(P1.getEta());
P1.setNome("Giovanni");
console.log("-----------------")
console.log(P1.getNome());
console.log("-----------------")