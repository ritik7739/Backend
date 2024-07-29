//constructor---> doesn't return anything & start with capital letter

function Person(name,age){
    this.name=name,
    this.age=age
}

Person.prototype.talk = function(){
    console.log(`Hi,my name is ${this.name}`);
}
let p1=new Person("ritik",24);
console.log(p1);

