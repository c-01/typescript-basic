// Interface
// interface Point {
//     x: number;
//     y: number;
// }
// vi pham cohesion : nhung gi lien quan vs nhau thi nen nam chung vs nhau
// ->  using Class
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.drawPoint = function () {
        console.log("Draw point at X: " + this._x + " & Y: " + this._y);
    };
    Point.prototype.movePoint = function () {
        console.log("Draw point at X: " + this._x + " & Y: " + this._y);
    };
    Point.prototype.cutPoint = function () {
        console.log("Draw point at X: " + this._x + " & Y: " + this._y);
    };
    Object.defineProperty(Point.prototype, "getX", {
        // Getters & Setters
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "setX", {
        set: function (value) {
            if (value < 0) {
                throw new Error('Value cannot be less than 0');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(3, 4);
point.setX = 199;
console.log(point.getX); // correct <> getX() wrong
point.drawPoint();
