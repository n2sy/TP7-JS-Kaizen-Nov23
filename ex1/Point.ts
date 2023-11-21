

export class Point {
    constructor(private _abs : number, private _ord : number ) {

    }
    get abs() {
        return this._abs;
    }
    set abs(a : number) {
        this._abs = a;
    }
    get ord() {
        return this._ord;
    }
    set ord(a : number) {
        this._ord = a;
    }
    calculerDistance(p : Point) {
        return Math.sqrt(Math.pow(this._abs - p.abs, 2) + Math.pow(this._ord - p.ord, 2))
    }
}