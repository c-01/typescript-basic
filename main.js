// Interface
// interface Point {
//     x: number;
//     y: number;
// }
// vi pham cohesion : nhung gi lien quan vs nhau thi nen nam chung vs nhau
// ->  using Class
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.drawPoint = function () {
        console.log("Draw point at X: " + this.x + " & Y: " + this.y);
    };
    Point.prototype.movePoint = function () {
        console.log("Draw point at X: " + this.x + " & Y: " + this.y);
    };
    Point.prototype.cutPoint = function () {
        console.log("Draw point at X: " + this.x + " & Y: " + this.y);
    };
    return Point;
}());
var point = new Point(3, 4);
point.drawPoint();
