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
    Object.defineProperty(Point.prototype, "x", {
        // Getters & Setters
        get: function () {
            return this._x;
        },
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
point.x = 199;
console.log(point.x);
point.drawPoint();
