// Static Property

// static method - has attached with class

// not need to create an instance or object to call static method

class Animal {
  static myMethod() {
    console.log("Static Method");
  }
  // static variable or property
   static title = 'The JavaScript Course';
}

Animal.myMethod();
console.log(Animal.title);
// const dog = new Animal;
// // dog.myMethod();
// console.log(dog.title)

