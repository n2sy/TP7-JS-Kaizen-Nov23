function renverserTableau<T>(tableau : T[]) : T[] {
    if(tableau.every((element) => typeof element == 'number'))
        return tableau.reverse();
    else if(tableau.every((element) => typeof element === 'string')) {   
             
        let newTab = tableau.map((element) => { 
             return element[0];
        })
        return newTab.reverse();
    }
    else
        return [];
}


const nombres : number[] = [1, 2, 3, 4, 5];
const nombresResultat : number[] = renverserTableau<number>(nombres);
console.log(nombresResultat);

const mots : string[] = ["Lundi", "Mardi", "Jeudi", "Vendredi"]; // ['V', 'J', 'M', 'L']
const motsResultat : string[] = renverserTableau<string>(mots);
console.log(motsResultat);

const tab : any[] = ["un", true, 10, "Vendredi"];
const tabResultat : any[] = renverserTableau<any>(tab);
console.log(tabResultat);



