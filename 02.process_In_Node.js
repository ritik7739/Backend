//process.argv is used for takes input but by default its print 2 path as output 

let  args=process.argv;
//because for 2 value we get path  
for(let i=2;i<args.length;i++){
    console.log("Hello to ",args[i]);
}