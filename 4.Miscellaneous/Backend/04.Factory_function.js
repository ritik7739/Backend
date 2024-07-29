function PersonMaker(name,age){
      const person ={
       name:name,
       age:age,
       talk(){
        console.log(`Hi,my name is ${this.name}`);
       },
    };
    return person;
}


let p1=PersonMaker("ritik",24);  //copy
let p2=PersonMaker("Deepak",25);  //copy

console.log(p1);
console.log(p2);
