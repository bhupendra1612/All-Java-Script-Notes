/* // =================== String ==================== //

1) JavaScript Strings: JavaScript strings are for storing and manipulating text. A JavaScript string is zero or more characters written inside quotes. You can use single or double quotes. Strings are immutable.

2) String written roles:  Strings are written with quotes. You can use single or double quotes. You can use quotes inside a string, as long as they don't match the quotes surrounding the string like: (let answer1 = "It's alright") & (let answer3 = 'He is called "Johnny"').

3) String Length: To find the length of a string, use the built-in length property like: (let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; let length = text.length;)

4) Escape Character: Because strings must be written within quotes, JavaScript will misunderstand this string like: (let text = "My name is \"Robin\" that.";). The solution to avoid this problem, is to use the backslash escape character. The backslash (\) escape character turns special characters into string characters. 

a) \' : ' :Single quote
b) \" : " :Double quote
c) \\ : \ :Backslash
d) \n : New Line
e) \r : Carriage Return
f) \t : tab
g) \b : Backspace

a) The sequence \"  inserts a double quote in a string: (let text = "My name is \"Robin\" that.";)
b) The sequence \'  inserts a single quote in a string: (let text= 'It\'s alright.';)
c) The sequence \\  inserts a backslash in a string: (let text = "The character \\ is called backslash.";)

5) Breaking Long Code Lines: For best readability, programmers often like to avoid code lines longer than 80 characters. A safer way to break up a string, is to use string addition. We cannot break up a code line with a backslash.

6) JavaScript Strings as Objects: Normally, JavaScript strings are primitive values, created from literals. But strings can also be defined as objects with the keyword new like: (let y = new String("Robin");). 😂 Do not create Strings objects. The new keyword complicates the code and slows down execution speed. String objects can produce unexpected results. Comparing two JavaScript objects always returns false.

7) JavaScript String Methods: String length, String slice(), String substring(), String substr(), String replace(), String replaceAll(), String toUpperCase(), String toLowerCase(), String concat(), String trim()
, String trimStart(), String trimEnd(), String padStart(), String padEnd(), String charAt(), String charCodeAt(), String split().

8) 



*/

// ========================= String Methods =====================

let str = "JavaScript is a Great is Language"

// 1) String length
let strLenght = str.length;
console.log(strLenght);

// 2) String toLowerCase()
let strtoLowerCase = str.toLowerCase(); 
console.log(strtoLowerCase);

// 3) String toUpperCase()
let strtoUpperCase = str.toUpperCase();
console.log(strtoUpperCase);

// 4) String includes() ?
let strIncludes = str.includes("Great");
console.log(strIncludes); // it is case sensitive

// 5) String startsWith()
let strStartsWith = str.startsWith("JavaScript");
console.log(strStartsWith); // it is case sensitive

// 6) String endWith()
let strEndWith = str.endsWith("language");
console.log(strEndWith); // it is case sensitive

// 7) String search()
let strSearch = str.search("is");
console.log(strSearch);

let strSearch1 = str.search("is1");
console.log(strSearch1);

// 8) String match()
let strMatch = str.match(/is/g);
console.log(strMatch);

// 9) String indexOf()
let strIndexOf = str.indexOf("is");
console.log(strIndexOf);

// 10) String lastIndexOf()
let strLastIndexOf = str.lastIndexOf("is");
console.log(strLastIndexOf);

// 11) String replace()
let strReplace1 = str.replace("JavaScript", "Python");
console.log(strReplace1);

let strReplace2 = str.replace("is", "are");
console.log(strReplace2);

let strReplace3 = str.replace(/is/g, "are");
console.log(strReplace3);

// 12) String trim()
let steSpace = "  javascript  "
let strTrim = steSpace.trim(); // remove space in string
console.log(strTrim);
 
// 13) String charAt()
let strChartAt = str.charAt("3");
console.log(strChartAt);

// 14) String charAt()
let strcharCodeAt = str.charCodeAt("1");
console.log(strcharCodeAt);

// 15) String fromCharCode()
let strfromCharCode = String.fromCharCode(50);
console.log(strfromCharCode);

let strfromCharCode1 = String.fromCharCode(110);
console.log(strfromCharCode1);

// 12) String concat()
let str2 = " Hello JS"
let str3 = " Hello MongoDB"
let strConcat = str.concat(str2);
console.log(strConcat);
let strConcat1 = str.concat(str2,str3);
console.log(strConcat1);


// 12) String trim()



// 12) String trim()



// 12) String trim()



// 12) String trim()


// 12) String trim()



// 12) String trim()


// console.log("This is strings tutorial")
// let a = "Robin";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);

// console.log(a.length)

// let real_name = "Robin"
// let friend = "Roshan"
// console.log("His name is " + real_name + " and his friends name is " + friend)
// console.log(`His name is ${real_name} and his friends name is ${friend}`)
// console.log(`His name is ${real_name} and his friends name is ` + friend)







// let b = "Bhupendra"


// console.log(b.slice(1, 5)) // five is not includes
// console.log(b.slice(2)) 
// console.log(b.replace("pe", "55"))
// console.log(b.concat(a, " Deepti", " Rahul", " Akansha"))

// console.log(b)


// const name1 = "Robin"
// const number = 45

// // console.log(name1 + number + " value");
// // console.log(name1 + " value " + number );
// // console.log(`hello my name is ${name1} and my roll number is ${number}`);

// const gameName = new String('Bhupendra_singh')

// // console.log(gameName[0]);
// // console.log(gameName.__proto__);
// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// // console.log(gameName.charAt(2));
// // console.log(gameName.indexOf('d'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   Robin    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://robin.com/robin%20singh"

// console.log(url.replace('%20', '-'))
// console.log(url.includes('singh'))
// console.log(url.includes('rohan'))
// console.log(gameName.split('_'));

