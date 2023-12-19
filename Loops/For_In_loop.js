// ========= For In Loop  =======//
// 1) JavaScript For In: The JavaScript for in statement loops through the properties of an Object.

const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x];
};
console.log(text);

// 2) For In Over Arrays: The JavaScript for in statement can also loop over the properties of an Array. Do not use for in over an Array if the index order is important. It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
const numbers = [45, 4, 9, 16, 25];
let txt1 = "";
for (let x in numbers) {
  txt1 += numbers[x];
};
console.log(txt1);

// 3) Array.forEach() Loop: The forEach() method calls a function (a callback function) once for each array element. Note that the function takes 3 arguments: a) The item value b) The item index c) The array itself.

/* const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt += value;
} */

const numbers1 = [45, 4, 9, 16, 25];
let txt2 = "";
numbers1.forEach(myFunction);
function myFunction(value) {
  txt2 += value;
};
console.log(txt2);