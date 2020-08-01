// 1. Ways to print in javscripts
// console.log("Hello World");
// alert("me"); Not use Now-a-days
// document.write("this document write");

// 2. Javascript console API
// console.log("Hello World");
// console.warn("this is a warning");
// console.error("this is an error");

// 3. Javascripts Variables
// Variables - conatainers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in javascript
// Numbers
// var num1 = 34;
// var num2 = 56;

// String
// var str1="This is string"
// var str2='This is also a string'

// Objects
// var marks={
//     ravi: 38,
//     shubham: 54,
//     mohit: 100, 
// }
// console.log(marks)

// Booleans
// var a=true
// var b=false
// console.log(a,b)

// var und=undefined is also same as (var und)
// var und
// console.log(und)

// var n=null
// console.log(n)

/*
At a very high level, there are two types of data types in javascripts
1.Primitive Data types: undefined, null, number, string, boolean, symbol(used in advanced js)
2.Reference Data types: Arrays, objects
*/

var arr = [1, 2, "string", 4, 5]

//logical not
// console.log(!true)
// console.log(!false)

// Function
// DRY= Do not repeat yourself
function avg(a, b) {
    return (a + b) / 2
}
c1 = avg(4, 6)
c2 = avg(14, 16)
// console.log(c1,c2)

// conditional in javascripts
var age = 41
// Single if statement
/*
if (age>18){
    console.log('you can drink')
}

// if-else statement
// if (age>18){
//     console.log('you can drink')
// }
// else{
//     console.log('you cannot drink')
// }

// if-else Ladder
if (age>32){
    console.log('You are not a kid')
}
else if (age>22){
    console.log('Bacche nahi rahe')
}
else if (age>21){
    console.log(' Yes Bacche nahi rahe')
}
else if (age>18){
    console.log('18 Bacche nahi rahe')
}
else{
    console.log('Bacche rahe')
}
*/

var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break
//         continue
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element)
// })

let j = 0
// while (j<arr.length) {
//     console.log(arr[j])
//     j++
// }

// do {
//     console.log(arr[j])
//     j++
// } while (j < arr.length);

let myArr = ["Raj", "iterater", 34, null, true]
// Array methods 
// console.log(myArr.length)
// myArr.pop()
// myArr.push("Mohit")
// myArr.shift()
// const newlen = myArr.unshift("Mohit")
// console.log(newlen)
// console.log(myArr)

// Strings in Javascripts
let abcd = "Mohit is a good boy good good"
// console.log(abcd.length)
// console.log(abcd.indexOf("good"))
// console.log(abcd.lastIndexOf("good"))
// console.log(abcd.slice(1,3))

// replace only replace only first occurance of the character
// console.log(abcd.replace("Mohit" , "Rohan"))

let Mydate = new Date()
// console.log(Mydate.getTime())
// console.log(Mydate.getFullYear())
// console.log(Mydate.getDay())
// console.log(Mydate.getMinutes())

// DOM MANIPULATION
let elem = document.getElementById('click')
// console.log(elem)
let elem1 = document.getElementsByClassName('container')
// console.log(elem1)
// elem1[0].style.background = 'yellow'
elem1[0].classList.add('bg-primary')
elem1[0].classList.add('text')
elem1[0].classList.remove('text')

// console.log(elem.innerHTML) (It helps to acces HTML)
// console.log(elem.innerText) (It helps to acces TEXT in HTML)
// console.log(elem1[0].innerHTML)
// console.log(elem1[0].innerText)

// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p')
// createdElement.innerText = "This is created para"
// tn[0].appendChild(createdElement)
// createdElement1 = document.createElement('b')
// createdElement1.innerText = "This is created bold"
// tn[0].replaceChild(createdElement1, createdElement)
// removeChild(element) ----> removes an Element

// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }

// window.onload = function() {
//     console.log('The document was loaded')
// }

// Events in Javascripts
// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log('Clicked on Container')
// })
// firstcontainer.addEventListener('mouseover', function(){
//     console.log('Mouse on Container')
// })
// firstcontainer.addEventListener('mouseout', function(){
//     console.log('Mouse out Container')
// })

// let pHTML = document.querySelectorAll('.container')[1].innerHTML
// firstcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = pHTML
//     console.log('Mouse up when clicked on Container')
// })
// firstcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log('Mouse down when clicked on Container')
// })

ab = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set Interval fired</b>"
    console.log("abcdefg");
}

// SetTimeout and Setinterval
// setTimeout(ab, 2000);
// setInterval(ab, 2000);
// use clearInterval / clearTimeout to cancel setInterval /setTimeout

// Javascript localStorage
// localStorage.setItem('name', 'Mohit'); to stores the data in local Storage
// localStorage.clear() clears the data from the local Storage
// localStorage.getItem('name') get the local Storage data
// localStorage.removeItem('name') remove a specific thing from the Storage
// localStorage to see the local Storage


//JSON
/*
obj = {name: "mohit" , length:1};
jso = JSON.stringify(obj); //helps to change the object to JSON string
console.log(typeof jso); //helps to find the type of the variable
console.log(jso);
parsed = JSON.parse(`{"name":"mohit","length":1,"a":{"this":"that"}}`)
console.log(parsed );
*/

//Template literals - Bactics
e = 23
console.log(`this is my ${e}`);