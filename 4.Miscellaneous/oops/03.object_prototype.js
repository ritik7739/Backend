let arr1=[1,2,3,4];
let arr2=[1,2,3,4];


arr1.sayHello=()=>{
    console.log("Helllo!, I am arr");
}
arr1.pop();
arr1.push(5);
console.log(arr1);

arr2.sayHello=()=>{
    console.log("Hello!,I am arr");
}

arr2.pop();
arr2.push(5);
console.log(arr2);


console.log(arr1._proto_);
console.log(Array.prototype);
console.log(String.prototype);