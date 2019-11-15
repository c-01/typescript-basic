
class Point { // has Access modifiers| same php

    constructor(private _x: number, private _y: number) {}

    drawPoint() {
        console.log(`Draw point at X: ${this._x} & Y: ${this._y}`);
    }

    movePoint() {
        console.log(`Draw point at X: ${this._x} & Y: ${this._y}`);
    }

    cutPoint() {
        console.log(`Draw point at X: ${this._x} & Y: ${this._y}`);
    }

    // Getters & Setters
    get x() {
        return this._x;
    }

    set x(value: number) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0');
        }
        this._x = value;
    }
}

let point = new Point(3,4);
point.x = 199;
console.log(point.x);

point.drawPoint();
