/*
1) JavaScript has 8 Datatypes: 7 Primitive Data types.
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object

2) The Object Datatype: 3 Non Primitive/Reference Data types.
    a) An object
    b) An array
    c) Function
    d) A date

 



5) JavaScript BigInt: All JavaScript numbers are stored in a a 64-bit floating-point format like: (let x = BigInt("123456789012345678901234567890")). 

6) JavaScript Booleans: Booleans can only have two values: true or false. Booleans are often used in conditional testing.

7) JavaScript Undefined: In JavaScript, a variable without a value, has the value undefined. The type is also undefined. Any variable can be emptied, by setting the value to undefined. The type will also be undefined. An empty value has nothing to do with undefined. An empty string has both a legal value and a type.

8) The typeof Operator: You can use the JavaScript typeof operator to find the type of a JavaScript variable. The typeof operator returns the type of a variable or an expression.

9) A JavaScript variable can hold any type of data. When adding a number and a string, JavaScript will treat the number as a string. JavaScript evaluates expressions from left to right. Different sequences can produce different results like: (let x = 16 + 4 + "Volvo"; 20Volvo), (let x = "Volvo" + 16 + 4; Volvo164). 

10) JavaScript Types are Dynamic: JavaScript has dynamic types. This means that the same variable can be used to hold different data types like: (let x; x = 5; x = "John"). Non Primitive all data types is objects

11) Data Types
1. var x= "hello world"; String
2. var x= 234; Number
3. var x= true, false;  Boolean
4. var x= ["html","CSS","Js"];  Array (show object in cansole)(data type is object)
5. var x= {first:"html", second:"CSS", third:"Js"};  Object (data type is object)
6. var x= null; null
7. var x; undefined 

*/

// // =========== first Comment ============
// // It use for know what is this data types.
// console.log(typeof "Jerry");
// console.log(typeof 234); // number use maximume 2 to power 53, bigint use for more big number
// console.log(typeof null); // null is types of object, null is standalone value
// console.log(typeof undefined); // it is undefines type
// console.log(typeof (accountEmail)); // we also find variable data types. 

// let score = 55
// console.log(typeof (score));

// // Symbol
// const id = Symbol("123");
// const idAnother = Symbol("123");
// console.log(id === idAnother);  // it false

// console.log(null == undefined);
// console.log(null === undefined);
// console.log('Yes');


// ====== Second Comment ======
// Change of data types
let score1 = "345abc";
let valueInNumber = Number(score1);
console.log(typeof valueInNumber)
console.log(valueInNumber)

let score2 = null
let valueInNumber1 = Number(score2);
console.log(valueInNumber1)  // null value is 0

let login = 1
let booleanlogin = Boolean(login)
console.log(booleanlogin); // true value is 1, false value is 0

let login1 = ""
let booleanlogin1 = Boolean(login1)
console.log(booleanlogin1); 

let login2 = "robin"
let booleanlogin2 = Boolean(login2)
console.log(booleanlogin2);  // string is convert into boolean ?

let someNumber = 100
let stringNumber = String(someNumber)
console.log(typeof stringNumber );

