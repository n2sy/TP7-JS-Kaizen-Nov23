import { role } from "./roleEnum";


export class Candidat {
    // public id : number;
    // public prenom : string;
    // public nom : string;

    constructor(public id : number, private _prenom: string, public nom : string,
        public roleAffecte : role,  public avatar? : string,) {
        // this.id = id;
        // this.prenom = prenom;
        // this.nom = nom;
    }

    get prenom() {
        return this._prenom;
    }

    set prenom(newPrenom : string) {
        this._prenom = newPrenom;
    }
}
