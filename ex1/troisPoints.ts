import { Point } from "./ex1";

export class TroisPoints {
    constructor(public A : Point, public B : Point, public C : Point) {}

    sontAlignes() {
        return (this.A.calculerDistance(this.B) == this.A.calculerDistance(this.C) + this.B.calculerDistance(this.C) || this.A.calculerDistance(this.C) == this.A.calculerDistance(this.B) + this.B.calculerDistance(this.C))
    }

    estTriangleEquilateral() {
        return (this.A.calculerDistance(this.B) == this.A.calculerDistance(this.C) || this.A.calculerDistance(this.B) == this.B.calculerDistance(this.C) || this.B.calculerDistance(this.C) == this.A.calculerDistance(this.C));
    }

}