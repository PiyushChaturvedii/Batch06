// Getter Setter Method

// it gives us to encapsulation ( data hiding)

// get - used to retrive the value of the property
// set - used to modify value within property

// it is useful when hide our complex logic inside function

class Circle{

    constructor(radius){
        this._radius = radius;  // _ private variable
    }

    get getRadius(){
        return this._radius;
    }

    set setRadius(newRadius){
        this._radius = newRadius
    }
    
    get getArea(){
        return Math.PI * this._radius * this._radius;
    }

}

let c1 = new Circle(10);

console.log(c1.getRadius);

c1.setRadius = 20;

console.log(c1.getRadius);
console.log(c1.getArea);

