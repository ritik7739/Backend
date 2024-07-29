class Person{
    constructor(name,age){  
        console.log("person class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi,my name is ${this.name}`);
    }
}


class Student extends Person{   
    constructor(name,age,marks){    //parent class constructor is being called
        console.log("student class constructor");
        super(name,age);
        this.marks=marks;
    }
}

class Teacher extends Person{  
    constructor(name,age,subject){
        console.log("Teacher class constructor");
        super(name,age);      //parent class constructor is being called
        this.subject=subject;
    }
}

stud1=new Student("ritik",23,95);
console.log(stud1);
console.log(stud1.name);
console.log(stud1.age);
stud2=new Student("deepak",23,98);
console.log(stud2);
stud3=new Student("saurabh",23,90);
