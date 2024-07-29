class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi,my name is ${this.name}`);
    }
}

let p1=new Person("ritik",24);
let p2=new Person("deepak",28);

console.log(p1);
console.log(p1.name);
console.log(p1.talk());
console.log(p1.talk===p2.talk);

console.log(p2);
console.log(p2.name);
console.log(p2.talk());