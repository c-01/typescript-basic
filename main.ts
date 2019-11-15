// Interface
interface Point {
    x: number,
    y: number
}

let drawPoint = (point: {x: number, y: number}) => {// Inline Annotation
    console.log(`Draw point at X: ${point.x} & Y: ${point.y}`);  
}

let movePoint = (point: Point) => {// Inline Annotation
    console.log(`Draw point at X: ${point.x} & Y: ${point.y}`);  
}

let cutPoint = (point: Point) => {// Inline Annotation
    console.log(`Draw point at X: ${point.x} & Y: ${point.y}`);  
}

drawPoint({
    x: 100,
    y: 2
});

// vi pham cohesion : nhung gi lien quan vs nhau thi nen nam chung vs nhau