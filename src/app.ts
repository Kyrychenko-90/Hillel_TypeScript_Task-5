showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

/*
Створіть класи Circle, Rectangle, Square і Triangle.
У кожного з них є загальнодоступний метод calculateArea.
У кожної фігури є загальнодоступні властивості - колір і назва,
які не можна змінювати після створення.
У Square і Rectangle зі свого боку є ще додатковий метод print,
який виводить рядок із формулою розрахунку площі
 */

class Shape {
    protected description: string;
    constructor(description: string) {
        this.description = description;
    }
}

class Circle extends Shape{
    public readonly color: string;
    public readonly name: string;
    public radius: number;
    private static shapeType: string = "Circle";
    constructor(description: string, color: string, name: string, radius: number) {
        super(description);
        this.color = color;
        this.name = name;
        this.radius = radius;
    }
    public calculateArea(): number {
        return Math.PI * (this.radius ** 2);
    }
    public static shapeTypePrint(): void {
        console.log(`This is a ${Circle.shapeType}`)
    }
}

class Rectangle extends Shape {
    public readonly color: string;
    public readonly name: string;
    public width: number;
    public height: number;
    private static shapeType: string = "Rectangle";
    constructor(description: string, color: string, name: string, width: number, height: number) {
        super(description);
        this.color = color;
        this.name = name;
        this.width = width;
        this.height = height;
    }
    public calculateArea(): number {
        return this.width * this.height;
    }
    public static shapeTypePrint(): void {
        console.log(`This is a ${Rectangle.shapeType}`)
    }
}

class Square extends Shape {
    public readonly color: string;
    public readonly name: string;
    public side: number;
    private static shapeType: string = "Square";
    constructor(description: string, color: string, name: string, side: number) {
        super(description);
        this.color = color;
        this.name = name;
        this.side = side;
    }
    public calculateArea(): number {
        return this.side ** 2;
    }
    public print(): void {
        console.log("Area of a square: S = a * a")
    }
    public static shapeTypePrint(): void {
        console.log(`This is a ${Square.shapeType}`)
    }
}

class Triangle extends Shape {
    public readonly color: string;
    public readonly name: string;
    public height: number;
    public side: number;
    private static shapeType: string = "Triangle"
    constructor(description: string, color: string, name: string, height: number, side: number) {
        super(description);
        this.color = color;
        this.name = name;
        this.height = height;
        this.side = side;
    }
    public calculateArea(): number {
        return 0.5 * this.height * this.side;
    }
    public print():void {
        console.log("Area of a triangle: S = 0.5 × a × b")
    }
    public static shapeTypePrint(): void {
        console.log(`This is a ${Triangle.shapeType}`)
    }
}

const circle = new Circle("A round shape", "green", "Circle", 7);
Circle.shapeTypePrint();
console.log(`Area of a ${circle.name}: ${circle.calculateArea()} and its color is ${circle.color}`);

const rectangle = new Rectangle("A rectangular shape", "red", "Rectangle", 2, 4);
Rectangle.shapeTypePrint();
console.log(`Area of a ${rectangle.name}: ${rectangle.calculateArea()} and its color is ${rectangle.color}`)

const square = new Square("A square shape", "blue", "Square", 5);
Square.shapeTypePrint();
square.print()
console.log(`Area of a ${square.name}: ${square.calculateArea()} and its color is ${square.color}`);

const triangle = new Triangle("A triangular shape", "yellow", "Triangle", 4, 6);
Triangle.shapeTypePrint();
triangle.print()
console.log(`Area of a ${triangle.name}: ${triangle.calculateArea()} and its color is ${triangle.color}`);