// console.log(myfun(1,1))

// function myfun(num1,num2){
//     return num1 - num2
// }

// function myfun(num1,num2){
//     return num1+num2
// }

// function myfun(){    //----> function declaration

// }


// const fun=function(num1,num2){
//     return num1-num2                 //--->  function expression
// }

// const fun=(num1,num2)=>{
//     return num1+num2                //--->arrow function
// }                


// const fun =(num1,num2)=>num1+num2    //----> bullet function

// console.log(fun(1,1));

// let arr=[10,412.5,"hello",true]
// console.log(arr);
// arr.push(30)
// //console.log(arr);

// arr.pop()
// console.log(arr);


// arr.unshift(30)      //--> adds in the 0th index of the array
// arr.shift()       //--> removes the 1st element in the array

// console.log(arr);


// let a=arr.length
// console.log(a);


// in js the object data type is the dict in the python
// let obj={
//     id:1,
//     name:"shanmukh",
//     age:23,
//     salary:30000,
//     techstack:["Python","sql","html&css"]
// }

// console.log(obj);
// console.log(obj.name)
// console.log(obj.techstack[0])


// let a=10
// let b=20
// // let data = [{},{}]   -->  2 objects in arr

// let data=[
//     {
//         id:1,
//         name:"shanmukh",
//         techstack:["python","sql","html&css"]
//     },
//     {
//         id:2,
//         name:"satya",
//         techstack:["java","c#"]
//     }
// ]

// console.log(data[0]);

// Create an array of 5 student names and print them using a for loop

let ar=["shanmukh","pradeep","rami","raju","sai"]

// for(let i=0;i<(ar.length);i++){
//     console.log(ar[i])
// }

// Add, remove, and update elements in an array using:
// push()
// pop()
// splice()

// ar.push("abcd")
// console.log(ar);

// ar.pop()
// console.log(ar);

// let x=ar.slice(0,3)
// console.log(x);

console.log(ar.splice(1,1))


// Create an object for a mobile phone with properties:
// brand
// model
// price
// Print all values in the console.

// let mobile={
//     brand:"samsung",
//     model:"m12",
//     price:12000,
// }

// console.log(mobile)