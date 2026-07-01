// Javascript memory types:
// 1.Stack memory:primitive datatypes,function calls, execution context-Code by value
// 2.Heap memory:Objects,Arrays,Functions,Dates,Sets,Maps, etc.-Code by reference

// Primitive types:Number,string,bigint,Symbol,undefined,null


// let str1=Symbol("abc");
// let str2=Symbol("abc");
// console.log(str1==str2);

// console.log(Number.MAX_SAFE_INTEGER);

// const num=9007199254740991;
// console.log(typeof(num));

// // Date(year,month,day,hours,minutes,seconds,milliseconds)
// const myDate=new Date();
// console.log(myDate);

// const box=document.getElementsByClassName('box');
// console.log(box); //Return a HTML collection which is an array-like structure
// console.log(box.length);
// // traversing using for loop
// // for(let i=0;i<box.length;i++){
// //     box[i].style.width='100px';
// //     box[i].style.height='100px';
// //     box[i].style.border='3px solid yellow';
// //     box[i].style.borderRadius='20px';
// //     box[i].style.backgroundColor='darkred';
// //     box[i].style.color='white';
// //     box[i].style.margin='20px';
// // }

// const boxArr=Array.from(box);
// boxArr.forEach(item =>{
//     item.style.width='100px';
//     item.style.height='100px';
//     item.style.border='3px solid yellow';
//     item.style.borderRadius='20px';
//     item.style.backgroundColor='darkred';
//     item.style.color='white';
//     item.style.margin='20px';
// });

// document.querySelector('.box').style.backgroundColor="pink";

// // getElementById() → returns one element
// // getElementsByClassName() → returns an HTMLCollection
// // getElementsByTagName() → returns an HTMLCollection
// // querySelector() → returns the first matching element
// // querySelectorAll() → returns a NodeList of all matching elements

// let img=document.getElementById('imag1');
// img.setAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdL66OJNiVXfgzTO6NOmnfjE5rggs2Q_r7B3Ygmj_UEg&s=10");
// // img.removeAttribute('alt');
// const value=img.getAttribute('src');
// console.log(value);
// img.classList.add('invert');
// img.classList.remove('invert');

// const div=document.createElement('div');
// div.innerHTML=`<h1>This heading is created using js</h1>`;
// document.body.append(div);
// const para=document.createElement('p');
// para.innerText=`Helo i am writing this paragraph.`
// document.body.appendChild(para);


// const para2=document.createElement('p');
// para2.innerText="This is replacement";
// div.appendChild(para);
// div.replaceChild(para2,para); //replace the element  replaceChild(newNode,oldNode)

// console.log(document.body.parentElement);
// console.log(document.body.children);

// const button=document.querySelector('#displaybtn');
// const textBox=document.querySelector("#nameInp");
// const h1=document.querySelector("h1");

// button.addEventListener('click',()=>{
//     console.log(textBox.value);
// })

// //click,dblclick,mousedown,mousemove,mouseleave,mouseover,contextmenu,wheel,keydown,keyup




const button = document.querySelector("#modeBtn");
let darkMode=false;
button.addEventListener("click", () => {
    if (!darkMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.innerText = "Light Mode";
        darkMode = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        button.innerText = "Dark Mode";
        darkMode = false;
    }
});