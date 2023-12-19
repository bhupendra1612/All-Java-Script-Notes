/*
1) JavaScript if, else, and else if: 


2) Conditional Statements: Very often when you write code, you want to perform different actions for different decisions. In JavaScript we have the following conditional statements:
    a) Use if to specify a block of code to be executed, if a specified condition is true
    b) Use else to specify a block of code to be executed, if the same condition is false
    c) Use else if to specify a new condition to test, if the first condition is false
    d) Use switch to specify many alternative blocks of code to be executed


*/

// ============ if statement ===========

if(true){
    //  block of code to be executed if the condition is true
}; 
if(false){
    //  block of code to be not executed if the condition is false
}; 

let a1 = 10;
let b1 = 25;
let c1 = 40;

if(a1<b1){
  console.log("this is true 1 ");
};
if(a1>b1){
  console.log("this is true 2 ");
};
if(a1<c1){
  console.log("this is true 3");
};

// if with logical operator
let value = 25
if(value >= 20 && value<= 30){
  console.log("Yes you are eligible")
};

if(value >= 27 || value<= 30){
  console.log("Yes you are eligible")
};
console.log(!value >= 12);

const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // Power is not define because it is local scope


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
};

// ========= if else ==============
// if (condition) {
//     //  block of code to be executed if the condition is true
// }else{
//     //  block of code to be executed if the condition is false
// };

let age = 17;
let grace = 2

if((age + grace) > 18){
  console.log("you can drive");
}else{
  console.log("you can not drive");
};

const temperature = 41
if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 40");
};


let a = 10;
let b = '100';
if(a >= 30){
    console.log("A is Greater")
  }else{
    console.log('A is smaller')
  };

  if(b === 100){
    console.log("B is same")
  }else{
    console.log('B is not same')
  };
  
var name = 'Robin Singh';
var gender = 'male';
if(gender == 'male'){
    console.log('Hello ' + name)
}else{
    console.log('Hello Mr.' + name)
};


const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
};

if (userEmail.length === 0) {
    console.log("Array is empty");
}

// =============== if elseif if ================
// if(condition1){
//     //  block of code to be executed if condition1 is true
// }else if(condition2){
//     //  block of code to be executed if the condition1 is false and condition2 is true
// }else{
//     //  block of code to be executed if the condition1 is false and condition2 is false
// };


if(age == 18){
  console.log("you can drive");
}else if(age == 0){
  console.log("Are you kidding ");
}else{
  console.log("You cannot drive");
};

if(age >= 18){
  console.log("you can drive");
}else if(age == 0){
  console.log("Are you kidding ");
}else if(age <= 25){
  console.log("Are you again kidding ")
}else{
  console.log("You cannot drive");
};

const balance = 1000
if (balance > 500) console.log("test"), console.log("test2");  // implicite scope, not use in companies

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");  
} else if (balance < 900) {
    console.log("less than 750");   
} else {
    console.log("less than 1200");
}


var per = 95;
if(per >= 80 && per <= 100){
  console.log('You are in merit')
}else if(per >= 60 && per < 80){
  console.log('You are in first division')
}else if(per >= 45 && per < 60){
  console.log('You are in second divison')
}else if(per >= 33 && per < 45){
  console.log('You are in third division')
}else if(per < 33){
  console.log('You are fail')
}else {
  console.log('Please enter valid persentage')
};






