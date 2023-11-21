
// var prenom : string | number = "nidhal";
// console.log(prenom);

import { Candidat } from "./Candidat";
import { Ingenieur } from './ingenieur';
import { role } from "./roleEnum";

// prenom = 10;

// console.log(prenom);

// var a : any ;
// a = 10;
// a = true;
// a = [1, 2];

var prenom : string;
prenom = "nidhal";

var c1 = new Candidat(1, "nidhal", "jelassi", role.admin);
var c2 = new Candidat(2, "clement", "booster-it", role.supervisor);

console.log(c1.roleAffecte);
console.log(c2.roleAffecte);

//c1.prenom = "Massi";
c1.prenom = "Massi";

// console.log(`Je suis ${c1.prenom}`);
console.log(`Je suis ${c1.prenom}`);


var i1 : Ingenieur;

