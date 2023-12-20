// ============= Code With Harry | Sigma Course | 69 ===========

// Write a program to calculate factorial of a number using reduce and using for loops
// 6! = 6*5*4*3*2*1

let a = 7

function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
};


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    };
    return fac
};
console.log(factorial(a));
console.log(facFor(a));