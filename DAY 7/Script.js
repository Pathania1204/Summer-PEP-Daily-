// Immediately Invoked Function Expression (IIFE)
// (function(){
//     console.log("This function runs immediately");
// })();

// Callback Function
// function greet(uname, callback){
//     console.log("Hello", uname);
//     callback();
// }
// function done(){
//     console.log("Greetings is done!");
// }
// greet("Narendra Modi", done)

// Callback Hell: It is a situation where many callbacks are nested inside one 
// another to perform asynchronous tasks, making the code difficult to read, maintain, 
// and debug. It is commonly solved using Promises or async/await.

// getUser(function(user){
//     getOrders(user.id, function(order){
//         getOrderDetails(order[0].id, function(details){
//             getOrderStatus(details.paymentID, function(status){
//                 console.log(status);
//             })
//         })
//     })
// })

// loginUser(function(user){
//     getProfile(user.id, function(profile){
//         getPosts(profile.id,function(posts){
//             console.log(posts);
//         })
//     })
// }) 

// Problems:
// 1. Code becomes harder to read.
// 2. Harder to debug.
// 3. Harder to maintain.
// 4. Error Handeling becomes messy.
// 5. Nested Structure keeps growing.

// Promises : A promise is an object that represents the eventual completion or 
// failure of an asyncronous operation
// Promise States: Pending, Fullfiled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Data received successfully!")
//     }
//     else{
//         reject("Something went wrong!")
//     }
// })
//  console.log(myPromise);
// OR
// myPromise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// const download = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve("Download Complete!");
//     }, 5000)
// })
// // console.log(download); // Pending
// download.then((data) => {
//     console.log(data);
// })

// Using Callback Hell
// loginUser(function(user){
//     getProfile(user.id, function(profile){
//         getPosts(profile.id,function(posts){
//             console.log(posts);
//         })
//     })
// }) 

// USing Promises OR Promise Chaining
// loginUser()
// .then((user) => {getProfile(user.id)})
// .then((profile) => {getPosts(profile.id)})
// .then((posts) => console.log(posts))
// .catch((error) => console.log(error))
// .finally(()=> console.log("Closing Promise"))

// Promise.resolve("This has been resolved")
// .then(console.log);

// Promise.reject("Wrong Password").catch(console.log);

// Promise.all : Runs multiple promises Simultaneously
// const p1 = Promise.resolve("A")
// const p2 = Promise.resolve("B")
// const p3 = Promise.resolve("C")
// Promise.all([p1,p2,p3])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(`Error: ${error}`);
// })

// Promise.race
// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("First")
//     },3000)
// })
// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Second")
//     },2000)
// })

// Promise.race([p1,p2])
// .then(console.log)

// Promise.allSettled()
// Promise.allSettled([
//     Promise.resolve("A"),
//     Promise.reject("Error")
// ])
// .then(console.log);

// Promise.any : It returns the first fulfilled Promise, unless all promises are rejected.
// Promise.any([
//     Promise.reject("Error"),
//     Promise.resolve("A"),
//     Promise.resolve("B")
// ])
// .then(console.log)

// const title = document.querySelector(`#postTitle`)
// const id = document.querySelector(`#postId`)
// const body = document.querySelector(`#postBody`)
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(res=>res.json())
// .then(post => {
//     title.innerText = post.title;
//     id.innerText = post.id;
//     bady.innerText = post.body;
// })
// .catch(error => {
//     console.log("jsonplaceholder.typicode is not responding!\n Error:",error);
// })

// Higher Order Function(HOF)
// 1. Accepts another function as an arguments.Accepts
// 2. Return another function

// function greetA(){
//     console.log("Hello A");
// }
// function greetB(){
//     console.log("Hello B");
// }
// function greetC(){
//     console.log("Hello C");
// }
// function greet(uname,callback){ // HOF
//     console.log("Hello",uname);
//     callback();
// }
// function done(){ // Callback Function
//     console.log("Greetings Completed"); 
// }
// greet("A", done)

function calculate(num1,num2,operation){
    return operation(num1,num2);
}
function add(x,y){
    return x+y;
}
function multiply(x,y){
    return x*y;
}
console.log(calculate(10,20,add));
console.log(calculate(10,20,multiply));

// FUnction returninganother function
function multiply(multiplier){
    return function(num){
        return num * multiplier
    }
}
const double = multiply(2);
console.log(double(10));