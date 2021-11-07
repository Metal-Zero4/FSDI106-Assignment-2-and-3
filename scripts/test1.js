/**
 * ways of creating objects in JS
 * -Object literal
 * -Object constructor
 * -Class
 */

function testObjectLiteral(){
    let dog= {
        name: "Fido",
        age: 3,
    };

    let lola={
        name: "Lola",
        age: 3,
    }

    console.log(dog);
    console.log(dog.name); // read
    dog.age=4; // write
}



function Dog(name,age){
    this.name=name;
    this.age=age;
}


function testObjectConstructor(){
    // an object constructor is a function that assign attributes to itself
    let fido=new Dog("fido", 3);
    let lola=new Dog("lola",4);    
    
    console.log(fido);
    console.log(fido.name); //read
    fido.age=4; //write
}


class Pet{
    constructor(name,age,type){
        this.name=name;
        this.age=age;
        this.type=type;
    }
}

function testClass(){
    let pet1=new Pet("Grumpy", 2, "Cat");
    console.log(pet1);
    console.log(pet1.name); // read
    pet1.age=3; // write
}

testObjectLiteral();
testObjectConstructor();
testClass();