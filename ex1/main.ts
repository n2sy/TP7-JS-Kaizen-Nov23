import { Point } from "./ex1";
import { TroisPoints } from "./troisPoints";

var p : Point = new Point(3, 3);
console.log(p);

//p.abs = 10;
//p.ord = 20;
console.log(p);
var p1 = new Point(0, 0);
console.log(p.calculerDistance(p1));

var p2 = new Point(6, 0);

var threePoints = new TroisPoints(p, p1, p2);

console.log(threePoints.sontAlignes());

console.log(threePoints.estTriangleEquilateral());


