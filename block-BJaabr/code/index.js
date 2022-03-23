// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
// function convertToString(n) {
//   return String(n);
// }

// // - Write a Function Expression
// let convertToString = function (n) {
//   return String(n);
// };

// // - Write an Arrow Function without curly brackets (if possible)
// let convertToString = (n) => String(n);

// // - Write an Arrow Function with curly brackets
// let convertToString = (n) => {
//   return String(n);
// };

// // - Execute the function
// convertToString(21);

// // - Execute the function and store the return value in a variable.
// let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
// function addOne1(n){
//    return n+1
// }
// addOne1(5)
// // - Write a Function Expression
// let addOne2 = function(n){
//   return n+1
// }
// addOne2(6)

// // - Write an Arrow Function without curly brackets(if possible)
// let addOne3 = (n) => n+1


// // - Write an Arrow Function with curly brackets
// let addOne4 = (n)=>{
//   return n+1    
// }

// // - Execute the function
// addOne1(5)

// // - Execute the function and store the return value in a variable.
// let vaar = addOne1(5)
// // - What is the typeof returnValue
// console.log(typeof vaar)

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
// function substractOne1(n){
//   return n-1
// }

// // - Write a Function Expression
// let substractOne2 = function(n){
//   return n-1
// }
// // - Write an Arrow Function without curly brackets(if possible)
// let substractOne3 = (n) => n-1
// // - Write an Arrow Function with curly brackets
// let substractOne4 = (n)=>{
//   return n-1
// }
// // - Execute the function
// substractOne4(6)
// // - Execute the function and store the return value in a variable.
// let vaar = substractOne4(6)
// // - What is the typeof returnValue
// console.log(typeof vaar)
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
// function sum1(a,b){
//   return a+b
// }
// // - Write a Function Expression
// let sum2 = function(a,b){
//   return a+b
// }
// // - Write an Arrow Function without curly brackets(if possible)
// let sum3 = (a,b)=> a+b
// // - Write an Arrow Function with curly brackets
// let sum4 = (a,b)=>{
//   return a+b
// }
// // - Execute the function
// sum3(1,2)
// // - Execute the function and store the return value in a variable
// let vaar = sum3(5,8)
// // - What is the typeof returnValue
// console.log(typeof vaar)
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
// function square1(n){
//   return n**2
// }
// // - Write a Function Expression
// let square2 = function(n){
//   return n**2
// } 
// // - Write an Arrow Function without curly brackets(if possible)
// let square3 = (n) => n**2
// // - Write an Arrow Function with curly brackets
// let square4 = (n)=>{
//   return n**2
// }
// // - Execute the function
// square4(5)
// // - Execute the function and store the return value in a variable
// let vaar =square4(5)
// // - What is the typeof returnValue
// console.log(typeof vaar)
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
// function isGreater1(x,y){
//   return (x>y)? true : false
// }

// // - Write a Function Expression
// let isGreater2 = function(x,y){
//   return (x > y) ? true : false
// }
// // - Write an Arrow Function without curly brackets(if possible)
// let isGreater3 = (x,y)=> (x>y)? true:false
// // - Write an Arrow Function with curly brackets
// let isGreater4 = (x,y)=>{
//   return (x > y) ? true : false
// }
// // - Execute the function
// isGreater3(2,3)
// // - Execute the function and store the return value in a variable
// let vaar = isGreater3(1,2)
// // - What is the typeof returnValue
// console.log(typeof vaar)
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven1(n) {
  return (n % 2 == 0) ? `Number is even` : `Number is odd`
}
// - Write an anonymous Function Expression
let oddOrEven2 = function (n) {
  return (n % 2 == 0) ? `Number is even` : `Number is odd`

}
// - Write an named Function Expression
let oddOrEven5 = function oe(n) {
  return (n % 2 == 0) ? `Number is even` : `Number is odd`

}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven3 = (n) => (n % 2 == 0) ? `Number is even` : `Number is odd`
// - Write an Arrow Function with curly brackets
let oddOrEven4 = (n) => { return (n % 2 == 0) ? `Number is even` : `Number is odd` }
// - Execute the function
console.log(oddOrEven2(45))
// - Execute the function and store the return value in a variable
let vaar = oddOrEven2(45)
// - What is the typeof returnValue
console.log(typeof vaar)
// done