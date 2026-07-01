// const obj1 = {
//     // key : Value
//     fname: "John",
//     lname: "Doe",
//     // this : refers to the object that is executing the current function
//     getFullName(){
//         return `${this.fname} ${this.lname}`;
//     },
// }

// Inherit properties from obj1
// const obj2 = {
//     __proto__: obj1,
// }
// console.log(obj2.getFullName);

// console.log(obj1.getFullName());

// const obj2 = {
//     fname: "Kirti",
//     lname: "Sai",
//     getFullName(){
//         return `${this.fname} ${this.lname}`;
//     },
// }
// const obj2 = Object.create(obj1); // Creates a new object instance
// // console.log(obj2); // Empty object with properties of obj1 inherited
//     obj2.fname = "Ajay";
//     obj2.lname = "Dev";
// console.log(obj2.getFullName());

/*
obj1 = {
fname: "John",
lname: "Doe",
__proto__: {Object}
}
obj2 = {
__proto__: 
}
*/
// console.log(obj1);
// Prototype: It is a property of functions(especially constructor functions and classes)
// __proto__: It is a property of objects that points to the object prototype

// console.log(obj1.fname);
// console.log(obj1.lname);

// obj1.age = 10;
// console.log(obj1);

// Wrapper Classes: String, Number, Boolean, Object, Array, null
// const str1 = "abc"; // Creates an instance of it i.e const str1 = new String("abc");
// console.log(str1);

// console.log(str1.__proto__);
// const num1 = 10; // const num1 = new Number(10);

// Prototype of any instance will be an Object, and prototype of the object will be null

// const obj1 = {
//     fname : "john",
//     lname: "Doe",
//     getFullName(){
//         return `Name: ${this.fname} ${this.lname}`
//     }
// }
// const obj2 = {
//     age : 24,
//     occupation: "Frontend Developer",
//     getAge(){
//         return `Age: ${age}`
//     }, 
//     getOccupation(){
//         return `Occupation: ${this.occupation}`
//     },
//     __proto__: obj1,
// }
// const obj3 = {
//     __proto__: obj2
// }
// console.log(obj3.getFullName(c3));

// using array constructor
let arr1=[1,2,3,4,5,"Hello"]
console.log(arr1);

// create an array 
const arr=new Array(5);
for(let i=0;i<arr.length;i++){
    arr[i]=i+1;
}
arr[5]=6;
console.log(arr)

let num=10;
console.log("Number",num);
function greet(){
    console.log("Hello");
}
greet();

// Javascript engine is a program that reads javascript code and execute it.
// Javascript is both interpretd and both compiled language.
// Modern Javascript Engine uses a Just-in-Time(JIT) compiler.
// V8 - Google Chrome
// SpiderMonkey - Mozilla Firefox
// JavaScriptCore - Microsoft Edge
// Chakra - Microsoft Edge
// JerryScript Community

// Call Stack

Promise.resolve("This is resolved").then(console.log);
setTimeout(()=>{
    console.log("3 seconds completed");
},3000);
console.log("This is a script");

// Call Stack is the javaScript Engine which is designed to execute synchronous code.
// Call Stack waits for no one. It is where JS keeps track of the functions that are currently executing.
// WEB API: Everything that is related to asynchronous nature is grouped under web api.
// Examples: Promises, setTimeOut, setTimeInterval etc.
// Task Queue: It contains asynchronous functions of the Web Api.
// Micro Tash Queue: Which contains promises.
// Event Loop: Process which is responsible for delivering code from Task Queue or Micro Task Queue 
// to the call stack. And it can only do it if the call stack is empty