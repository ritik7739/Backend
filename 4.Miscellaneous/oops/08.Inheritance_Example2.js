class Mammals{
    constructor(name){
        this.name=name;
        this.type="warm blooded";
    }
    eat(){
        console.log("I am eating");
    }
};

class Dog extends Mammals{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("Bhoo Bhoo");
    }
}

class Cat extends Mammals{
    constructor(name){
        super(name);
    }
    Meow(){
        console.log("Meow... Meow...");
    }
}

let d1=new Dog("tonny");
let c1=new Cat("tunni");

console.log(d1);
console.log(c1);