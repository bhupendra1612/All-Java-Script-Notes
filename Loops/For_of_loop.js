/*
1) The For Of Loop: The JavaScript for of statement loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more. but for of loop is not working in object.

2) variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.  Iterable: An object that has iterable properties.

*/

// Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x;
};
console.log(text);

// Looping over a String
let language = "JavaScript";
let text1 = "";
for (let x of language) {
text1 += x;
};
console.log(text1);

