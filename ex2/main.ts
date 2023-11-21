import { Formation } from "./Formation";
import { Stagiaire } from "./Stagiaire";

var s0 : Stagiaire = new Stagiaire("nidhal", [12, 14, 16]);
var s1 : Stagiaire = new Stagiaire("clément", [10, 12, 14]);
var s2 : Stagiaire = new Stagiaire("Anne-S", [16, 17, 16.5]);

console.log(s0.calculerMoyenne());
console.log(s1.calculerMoyenne());
console.log(s2.calculerMoyenne());

var f0 = new Formation("Javascript", 4, [s0, s1, s2]);

console.log(f0.calculerMoyenneFormation().toFixed(2)); // Moyenne 15,25)
console.log(f0.getIndexMax()); 
console.log(f0.afficherNomMax()); 
console.log(f0.afficherMinMax()); 
console.log(f0.trouverMoyenneParNom("Rapha")); 




