// console.log(typeof([]));
// console.log("100"+2);
// console.log("100"-2);
// console.log(typeof NaN);
// console.log(Boolean([]));

// let arr1 = [1,2,3];
// let arr2 =  arr1;
// arr2[0] = 9;
// console.log(arr1[0]);  OUTPUT:9
  
// let arr1 = [1,2,3];
// let arr2 =  [...arr1];
// arr2[0] = 9;
// console.log(arr1[0]);   OUTPUT:1

// console.log(typeof {});

// let a = String(123)
// console.log(typeof a);

// console.log(parseInt("123abc"));

// function greetings(){
//     console.log("Hello Mitron!!");
// }
// greetings()

// function greetings(uname){
//     return `Hello ${uname}`;
// }
// console.log(greetings("Modi"));

// function greetings(fname="Garima", lname="Pathania"){
//     return `Hello ${fname} ${lname}`;
// }
// console.log(greetings());

// function display(){
//     console.log(arguments[2]);
// }
// display(10,20,30,40)

// let greetings = () => {
//     return "Hello User";
// }
// console.log(greetings());


// let greetings = (fname = "Garima" , lname = "Pathnaia") => {
//     return `Hello ${fname} ${lname}`;
// }
// console.log(greetings("Akhil","Thakur"));

// let display = (...args) => {
//     console.log(args);
// }
// display(10,20,30,40)

// let arr1 = [1,2,3];
// let arr2 = [...arr1]; // [1,2,3]
// // let arr2 = [arr1] // [[1,2,3]]
// console.log(arr2);

// let age = 18;
// if(age >= 18 && age <= 60){
//     console.log("You are Eligible to apply for Driving Licence");
// }
// else if(age>60){
//     console.log("Senior Citizen are not Eligible");
// }
// else{
//     console.log("You are not Eligible for DL");
// }

let age = 20;
let sol = age>18 ? "Eligible" : "Not Eligible";
console.log(sol);

