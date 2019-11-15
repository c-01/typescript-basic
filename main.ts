// Interface
// interface Point {
//     x: number;
//     y: number;
// }


// vi pham cohesion : nhung gi lien quan vs nhau thi nen nam chung vs nhau
// ->  using Class

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
    get getX() {
        return this._x;
    }

    set setX(value: number) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0');
        }
        this._x = value;
    }
}

let point = new Point(3,4);
point.setX = 199;
console.log(point.getX); // correct <> getX() wrong

point.drawPoint();
