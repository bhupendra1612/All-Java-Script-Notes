/*
1) JavaScript Numbers: JavaScript has only one type of number. Numbers can be written with or without decimals.

2) Integer Precision: Integers (numbers without a period or exponent notation) are accurate up to 15 digits like: (let x = 999999999999999;). The maximum number of decimals is 17. 

3) Floating Precision: Floating point arithmetic is not always 100% accurate like: (let x = 0.2 + 0.1; 0.30000000000000004)

4) Adding Numbers and Strings: If you add a number and a string, the result will be a string concatenation. If you add a string and a number, the result will be a string concatenation. A common mistake is to expect this result to be 30 like: (let x = 10; let y = 20; let z = "The result is: " + x + y; The result is: 1020). because The JavaScript interpreter works from left to right.

5) NaN - Not a Number: NaN is a JavaScript reserved word indicating that a number is not a legal number. You can use the global JavaScript function isNaN() to find out if a value is a not a number like: (let x = 100 / "Apple"; isNaN(x); true). 

6) Infinity: Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number. Division by 0 (zero) also generates Infinity. Infinity is a number: typeof Infinity returns number. 

7) Hexadecimal: JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

8) JavaScript Numbers as Objects: Normally JavaScript numbers are primitive values created from literals. But numbers can also be defined as objects with the keyword new. Do not create Number objects. The new keyword complicates the code and slows down execution speed. Number Objects can produce unexpected results. Comparing two JavaScript objects always returns false. 


4) JavaScript Numbers: All JavaScript numbers are stored as decimal numbers (floating point). Numbers can be written with, or without decimals. Extra large or extra small numbers can be written with scientific (exponential) notation like: (let y = 123e5; 12300000 ) & (let z = 123e-5; 0.00123). Javascript numbers are always one type: double (64-bit floating point).


*/
//=========== Number & Maths =============//

const score = 400;
console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3));
// const otherNumber1 = 123.8966;
// console.log(otherNumber1.toPrecision(3));

// const hundreds = 1000000 ;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));


//============== Math ==================//

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log(Math.random()*10 +1);
// console.log((Math.random()*10) +1);
// console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20
console.log(Math.random()*(max - min +1));
console.log(Math.floor(Math.random()*(max - min +1)));
console.log(Math.floor(Math.random()*(max - min +1)) + min);  //



//================ Operations ===================//

let value = 5;
let negValue = -value;
console.log(negValue);

let str1 = "hello"
let str2 = " world"
let str3 = str1+str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");   
console.log(+true);
console.log(+"");

let gameCounter = 100;
gameCounter++;
let gameCounter1 = 100;
++gameCounter1;
console.log(gameCounter);
console.log(gameCounter1);


//================ Comparision of Data Types ===================//

console.log("2" > 1);  // JavaScript convert automaticaly "2" in Number
console.log("02" > 1);
console.log("2" < 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);  // null value is greater than 0

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log(true > 1);
console.log(true <= 1);
console.log(false <= 0);

console.log("2" === 2); // for equal data types and values


// =========58: Number Methods ==========

// 1) number function

let num = "99"
let numChange = Number(num)
console.log(numChange);
console.log(numChange + 99);

let num1 = true;
let numChange1 = Number(num1)
console.log(numChange1);

let num2 = false;
let numChange2 = Number(num2)
console.log(numChange2);


// 2) parselnt function 

let numParseint = "99 30 45";
let numParseint1 = "25.55";
let numParseint2 = "50 number";
let numParseintCheck = parseInt(numParseint)
let numParseintCheck1 = parseInt(numParseint1)
let numParseintCheck2 = parseInt(numParseint2)
console.log(numParseintCheck);
console.log(numParseintCheck1);
console.log(numParseintCheck2);

// 3) parseFloat function 

let numParsefloat = "25.55";
let numParsefloat1 = "10 YEAR";
let numParsefloatCheck = parseFloat(numParsefloat)
let numParsefloatCheck1 = parseFloat(numParsefloat1)
console.log(numParsefloatCheck);
console.log(numParsefloatCheck1);

// 4) isFinite() function

let numFinite = 100;
let numFiniteCheck = isFinite(numFinite)
console.log(numFiniteCheck);

let numFinite1 = "HELLO";
let numFiniteCheck1 = isFinite(numFinite1)
console.log(numFiniteCheck1);

let numFinite2 = Infinity;
let numFiniteCheck2 = isFinite(numFinite2)
console.log(numFiniteCheck2);

// 4) isInteger() function

let numInterger = 100;
let numIntegerCheck = Number.isInteger(numInterger)
console.log(numIntegerCheck);

let numInterger1 = "100";
let numIntegerCheck1 = Number.isInteger(numInterger1)
console.log(numIntegerCheck1);

let numInterger2 = 95.99;
let numIntegerCheck2 = Number.isInteger(numInterger2)
console.log(numIntegerCheck2);

let numInterger3 = -100;
let numIntegerCheck3 = Number.isInteger(numInterger3)
console.log(numIntegerCheck3);


// toFixed Function

let numTofixed = 5.43263
let numTofixedCheck = numTofixed.toFixed(3)
console.log(numTofixedCheck);

let numTofixed1 = 10.389863
let numTofixedCheck1 = numTofixed1.toFixed(1)
console.log(numTofixedCheck1);

// toPrecision Function

let numTopricision = 5.43
let numTopricisionCheck = numTopricision.toPrecision(2)
console.log(numTopricisionCheck);

let numTopricision1 = 5.47
let numTopricisionCheck1 = numTopricision1.toPrecision(2)
console.log(numTopricisionCheck1);

let numTopricision2 = 5.47
let numTopricisionCheck2 = numTopricision2.toPrecision(6)
console.log(numTopricisionCheck2);



