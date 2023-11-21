
export class Stagiaire {
    constructor(public nom : string, public notes : number[]) {}

    calculerMoyenne() {
        let somme = this.notes.reduce((a : number, b: number): number => { return a + b});
        return somme / this.notes.length;
    }

    trouverMax() {
        return Math.max(...this.notes)
    }
    trouverMin() {
        return Math.min(...this.notes)
    }
}