// Interface
// interface Point {
//     x: number;
//     y: number;
// }


// vi pham cohesion : nhung gi lien quan vs nhau thi nen nam chung vs nhau
// ->  using Class

class Point { // has Access modifiers| same php

    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    drawPoint() {
        console.log(`Draw point at X: ${this.x} & Y: ${this.y}`);
    }

    movePoint() {
        console.log(`Draw point at X: ${this.x} & Y: ${this.y}`);
    }

    cutPoint() {
        console.log(`Draw point at X: ${this.x} & Y: ${this.y}`);
    }
}

let point = new Point(3,4);
point.drawPoint();
