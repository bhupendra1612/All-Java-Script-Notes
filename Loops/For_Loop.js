/* 
1) Loops: Loops are handy, if you want to run the same code over and over again, each time with a different value. 

2) Different Kinds of Loops:
    a) for - loops through a block of code a number of times
    b) for/in - loops through the properties of an object
    c) for/of - loops through the values of an iterable object
    d) while - loops through a block of code while a specified condition is true
    e) do/while - also loops through a block of code while a specified condition is true

3) For loop : The for statement creates a loop with 3 optional expressions:
    for (expression 1; expression 2; expression 3) {
    // code block to be executed
    }

4) Loop is Divided in 3 Parts: 1) Initialization 2) condition 3) increment/decrement
   a) Expression 1 is executed (one time) before the execution of the code block. 
   b) Expression 2 defines the condition for executing the code block. 
   c) Expression 3 is executed (every time) after the code block has been executed.

5) Expression 1: Normally you will use expression 1 to initialize the variable used in the loop (let i = 0). This is not always the case. JavaScript doesn't care. Expression 1 is optional. You can initiate many values in expression 1 (separated by comma). And you can omit expression 1 (like when your values are set before the loop starts). 

6) Expression 2: Often expression 2 is used to evaluate the condition of the initial variable. This is not always the case. JavaScript doesn't care. Expression 2 is also optional. If expression 2 returns true, the loop will start over again. If it returns false, the loop will end. If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end.

7) Expression 3: Often expression 3 increments the value of the initial variable. This is not always the case. JavaScript doesn't care. Expression 3 is optional.

*/

// =============== For Loop =================

for (let index = 4; index < 10; index++){
  console.log(index)
};

for (let index = 0; index <= 5; index++){
  const element = index;
  console.log(element)
};

for (let i = 0; i <= 6; i++){
  const element = i;
  if (element == 3){
    console.log(" This 5 is the best number ")
  }
  console.log(element)
};






// ================= for loop on Array ================
let myArray = [" flash", " superman", " ironman", " spiderman "]
console.log(myArray)
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element)
};



// ========== Nested Loop ============

for (let i = 0; i <= 5; i++) {
  console.log(` Outer loop value; ${i}`)
  for (let a = 0; a <= 5; a++) {
    console.log(` Inner loop value ${a} and outer loop ${i}`)
  };
};


for(var Y = 1; Y <= 100; Y= Y+10){ // make 1 to 100 number
  for(var b = Y; b < Y+10; b++){
    // console.log(b);
  }
};
  
for (var a = 1; a<=5; a++){
  for(var b = 1; b <= a; b++){
    console.log(b)
  };
};
  
for (var a = 1; a<=5; a++){
  for(var b = 1; b <= a; b++){
    console.log(a)
  };
};
  
for (var a = 5; a>=1; a--){
  for(var b = 1; b <= a; b++){
    console.log(a)
  };  
};
  
for (var a = 5; a>=1; a--){
  for(var b = a; b >= 1; b--){
    console.log(b)
  };
};

// Make table using nested loop
for (let i = 1; i < 5; i++) {
  console.log(` Outer loop value; ${i}`)
  for (let a = 1; a <= 5; a++) {
    console.log(i + '*' + a + ' = ' + i*a)
  };
};

for (let i = 1; i <= 5; i++) {
  console.log(` Outer loop value; ${i}`)
  for (let a = 1; a <= 5; a++) {
    console.log(` Inner loop value ${a} and outer loop ${i}`)
    for (let z = 1; z <= 3; z++) {
      console.log(` Inner loop value ${a} and outer loop ${i} and most inner loop ${z}`)
    }
  }
};


// ============= Break & Continue ============

for (let i = 0; i <= 5; i++) {
  if (i == 3){
    console.log(`Detected 3`);
    break
  };
  console.log(`value of i is ${i}`)
};

for (let i = 0; i <= 5; i++) {
  if (i == 3){
    console.log(`Detected 3`);
    continue
  };
  console.log(`value of i is ${i}`)
};


