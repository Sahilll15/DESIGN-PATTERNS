"use strict";
class Red {
    applyColors() {
        console.log('Applying Red color');
    }
}
class Blue {
    applyColors() {
        console.log('Applying Blue colors');
    }
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    draw() {
        console.log('drawing the circle');
    }
}
class Square extends Shape {
    draw() {
        console.log('drawing the square');
    }
}
const redCircle = new Circle(new Red());
redCircle.draw();
const blueSquare = new Square(new Blue());
blueSquare.draw();
