/* 
1) JavaScript Variables: Variables are containers for storing values. JavaScript Variables can be declared in 4 ways: Automatically, Using var, Using let, Using const. It is considered good programming practice to always declare variables before use.  

2) Automatically: They are automatically declared when first used: x = 5; y = 6; z = x + y;. we set variable without let & var but don't use this methods. 

3) The let and const keywords were added to JavaScript in 2015. The var keyword should only be used in code written for older browsers. It's a good programming practice to declare all variables at the beginning of a script.

4) When to Use var, let, or const: 
   a) Always declare variables.
   b) Always use const if the value should not be changed.
   c) Always use const if the type should not be changed (Arrays and Objects).
   d) Only use let if you can't use const.
   e) Only use var if you MUST support old browsers.

5) You can declare many variables in one statement. Start the statement with let and separate the variables by comma. let person = "John Doe", carName = "Volvo", price = 200;.  A declaration can span multiple lines: 
let person = "John Doe",
carName = "Volvo",
price = 200;

6) A variable declared without a value will have the value undefined. If you re-declare a JavaScript variable declared with var, it will not lose its value. You cannot re-declare a variable declared with let or const.

7) If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
like  = let x = "5" + 2 + 3; let x = 2 + 3 + "5"; this all are string 

8) JavaScript Dollar Sign $: Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names. let $ = "Hello World"; let $$$ = 2; let $myMoney = 5;. Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.

9) JavaScript Underscore (_): Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names. let _lastName = "Johnson"; let _x = 2; let _100 = 5;. Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.

10) JavaScript Let: Variables declared with let have Block Scope. Variables declared with let cannot be Redeclared in the same scope. 

11) Block Scope: Before ES6 (2015), JavaScript did not have Block Scope. JavaScript had Global Scope and Function Scope. Variables declared inside a { } block cannot be accessed from outside the block. Redeclaring a variable inside a block will not redeclare the variable outside the block. Redeclaring a variable with let, in another block, IS allowed. 

12) Global Scope: Variables declared with the var always have Global Scope. Variables declared with the var keyword can NOT have block scope. Variables declared with var inside a { } block can be accessed from outside the block.  

13) Difference Between var, let and const:
    a) let and const have block scope.
    b) let and const can not be redeclared.
    c) let and const must be declared before use.
    d) let and const does not bind to this.
    e) let and const are not hoisted.
    f) var is hoisted & binds to this.
    g) const variables must be assigned a value when they are declared:

14) Let & Const Hoisting: Variables defined with var are hoisted to the top and can be initialized at any time. Meaning: You can use the variable before it is declared. ex:  carName = "Volvo"; var carName;. Variables defined with let are also hoisted to the top of the block, but not initialized. Meaning: Using a let variable before it is declared will result in a ReferenceError. Variables defined with const are also hoisted to the top, but not initialized. Meaning: Using a const variable before it is declared will result in a ReferenceError.

15)  Do not use var for variable in mordern Java script, use only let variable because of issue in block scope and functional scope. var is global scope and let is block & function scope. 

16) {} - this sign is called Scope. if we not provide value to variable it is become: 'undefined' statement. "Use Strict"; - Treat all JS code as newer version. Prefer not to use var: because of issue in block scope and functional scope. 

17) How to write a variable name:
1. firstname
2. first-name
3. first_name
4. firstName
5. firstname99

Wrong way: 1. first name, 2. 99firstname
 
18) JavaScript const: Always declare a variable with const when you know that the value should not be changed. Use const when you declare: new Array, new Object, new Function, new RegExp. It does not define a constant value. It defines a constant reference to a value. Because of this you can NOT:

a) Reassign a constant value
b) Reassign a constant array
C) Reassign a constant object
d) Change the elements of constant array
e) Change the properties of constant object
f) But we  can NOT reassign the array & object:
g) Redeclaring an existing var or let variable to const, in the same scope, is not allowed.
h) Reassigning an existing const variable, in the same scope, is not allowed.
i) Redeclaring a variable with const, in another scope, or in another block, is allowed.

*/

const accountId = 122445
let accountEmail = "robin@gmail.com"
var acccountPassword = "123456"  
accountCity = "Jaipur"
let accountState;  

console.log(accountId);
console.log(accountEmail);
console.log(acccountPassword);
console.log(accountCity); 
console.table([accountId, accountEmail, acccountPassword, accountCity, accountState]);

accountEmail = "rohan@gmail.com"
acccountPassword = "1351525"  
accountCity = "Gurugram"

console.log(accountEmail);
console.log(acccountPassword);
console.log(accountCity); 


var firstName = "first name"
var first, second, third;
first = 50, second= 100, third = 150;

console.log(firstName);
console.log(first);
console.log(second);


var first_name = "Robin"
console.log(first_name);
var first_name = "Bhupendra singh"
console.log(first_name);

// let first_name = "Veer" this variable is already declared
// let first_name = "Bhupendra singh"  //  we are not decaled same name again in Let but we assign new value to let.

// Const Variable
const Y= "This is constant variable it is not change"
console.log(Y);