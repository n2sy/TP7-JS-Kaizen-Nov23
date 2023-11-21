import { Stagiaire } from "./Stagiaire";


export class Formation {
    constructor(public intitule : string, public nbJours : number, public stagiaires : Stagiaire[]) {}

    calculerMoyenneFormation() {
        let tabMoyennes = this.stagiaires.map((stagiaire) => stagiaire.calculerMoyenne());
        return tabMoyennes.reduce((a : number, b: number): number => { return a + b}) / this.stagiaires.length;
    }

    getIndexMax() {
        let tabMoyennes = this.stagiaires.map((stagiaire) => stagiaire.calculerMoyenne());
        let i = tabMoyennes.findIndex((moy) => moy == Math.max(...tabMoyennes));
        return i
    }

    afficherNomMax() {
        let i = this.getIndexMax();
        return this.stagiaires[i].nom;
    }

    afficherMinMax() {
        return this.stagiaires[this.getIndexMax()].trouverMin();
    }

    trouverMoyenneParNom(nom : string) {
        let st = this.stagiaires.find(elt => elt.nom == nom);
        if(st) return st.calculerMoyenne();
        else return 'Stagiaire Introuvable'
    }
}



