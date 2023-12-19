/*
1) JavaScript Switch Statement: The switch statement is used to perform different actions based on different conditions. Use the switch statement to select one of many code blocks to be executed. 

2) This is how it works:: The switch expression is evaluated once. The value of the expression is compared with the values of each case.If there is a match, the associated block of code is executed. If there is no match, the default code block is executed.

3) The break Keyword: When JavaScript reaches a break keyword, it breaks out of the switch block. This will stop the execution inside the switch block. If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

4) The default Keyword: The default keyword specifies the code to run if there is no case match. The default case does not have to be the last case in a switch block. If default is not the last case in the switch block, remember to end the default case with a break.

5) Strict Comparison: Switch cases use strict comparison (===). The values must be of the same type to match. A strict comparison can only be true if the operands are of the same type.

*/


// ============= Swith Case Satatment ==============
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// switch (expression){
//     case condition1: statement(s)
//     break;
  
//     case condition2: statement(s)
//     break;
  
//     case condition3: statement(s)
//     break;
  
//     default: statement(s)
//   };


let day = 2;
switch (day){
  case 0: console.log('Today is Monday')
    break;
  case 1: 
    console.log('Today is Tuesday')
    console.log('Today is Tuesday 2')
    break; 
  case 2: 
    console.log('Today is Wednesday')
    break; 
  case 3:
    console.log('Today is Thursday')
    break; 
  case 4: 
    console.log('Today is Friday')
    break; 
  case 5: 
    console.log('Today is Saturday')
    break; 
  case 6: 
    console.log('Today is Sunday')
    break; 
  default:
    console.log('Please enter valid week day.');
};

let Age = 40;
switch(true){
  case (Age >= 15 && Age <= 20):
    console.log("You are eligible");
    break;
  case (Age >= 30 && Age <= 40):
    console.log("You are not eligible");
    break;
  default:
    console.log("Enter the valid age");
};

const month = "march"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
};

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
};


// ========= ? : Ternary statement ===========
// (condition) ? True statement: False statement, it use only for one statement
// condition ? true : false


let a = 10;
let b = 20;

c = a>b ? (a-b):(b-a);
console.log(c);

if (a>b){
    let c = a -b;
    console.log(c);
}else{
    let c = b-a;
    console.log(c);
};

c = a<b ? (a-b):(b-a);
console.log(c);

let num = 100
let num1;
(num==100)? num1='true':num1='false'
console.log(num1);
num1 = 'Value is ' + (num==100 ? num1='true':num1='false');
console.log(num1);

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


//======== Nullish Coalescing Operator (??): null, undefined ======

// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values:  "0", 'false', " ", [], {}, function(){}

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);