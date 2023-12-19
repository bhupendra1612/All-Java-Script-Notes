/*


1) The While Loop: The while loop loops through a block of code as long as a specified condition is true. If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser. 

2) The Do While Loop: The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.  Do not forget to increase the variable used in the condition, otherwise the loop will never end!.


*/

 
//============ Videos 27 While and Do While loop ============//

let index = 0
while (index <= 10){
  console.log(`Value of index is ${index}`)
  index = index + 2
  // console.log(`Value of index is ${index}`)
};

let myArray1 = [" flash", " superman", " ironman", " spiderman "]
let arr = 0
while (arr <= myArray1.length){
  console.log(`Value is ${myArray1[arr]}`)
  arr = arr + 1
};

while (arr <= myArray1.length){
  console.log(`Value is ${myArray1}`)
  arr = arr + 1
};


let score = 11
do {
  console.log(`Score is ${score}`);
  score++
} while (score <= 10);

