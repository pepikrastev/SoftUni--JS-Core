class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }   
    
    static distance(firstPoint, secondPoint){
        let a = Math.pow(firstPoint.x - secondPoint.x, 2);
        let b = Math.pow(firstPoint.y - secondPoint.y, 2);
        let distance = Math.sqrt(a + b);

        return distance
    }
}