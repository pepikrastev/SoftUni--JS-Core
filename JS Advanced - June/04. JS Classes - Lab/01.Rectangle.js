class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    calcArea() {
        return this.height * this.width;
    }
}

let rect = new Rectangle(5, 2, "red");
console.log(rect.calcArea())
