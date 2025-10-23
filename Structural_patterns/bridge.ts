interface Color {
  applyColors(): void;
}

class Red implements Color {
  applyColors(): void {
    console.log('Applying Red color');
  }
}

class Blue implements Color {
  applyColors(): void {
    console.log('Applying Blue colors');
  }
}

abstract class Shape {
  protected color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  abstract draw(): void;
}

class Circle extends Shape {
  draw(): void {
    console.log('drawing the circle');
  }
}

class Square extends Shape {
  draw(): void {
    console.log('drawing the square');
  }
}

const redCircle = new Circle(new Red());

redCircle.draw();

const blueSquare = new Square(new Blue());

blueSquare.draw();
