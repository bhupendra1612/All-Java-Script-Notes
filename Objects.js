/*
1) Objects: Objects are variables too. But objects can contain many values like: (const car = {type:"Fiat", model:"500", color:"white"}). It is a common practice to declare objects with the const keyword. You define (and create) a JavaScript object with an object literal. Spaces and line breaks are not important. An object definition can span multiple lines. The name:values pairs in JavaScript objects are called properties. JavaScript objects are containers for named values called properties.

2) Accessing Object Properties: We can access object properties in two ways:
a) objectName.propertyName = person.lastName;
b) objectName["propertyName"] = person["lastName"];

3) Object Methods: Objects can also have methods. Methods are actions that can be performed on objects. Methods are stored in properties as function definitions like: fullName: function() {return this.firstName + " " + this.lastName;}. A method is a function stored as a property. this refers to the person object. 

4) What is this?: In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called). The this keyword refers to different objects depending on how it is used. this is not a variable. It is a keyword. You cannot change the value of this.
A) In an object method, this refers to the object.
b) Alone, this refers to the global object.
c) In a function, this refers to the global object.
d) In a function, in strict mode, this is undefined.
e) In an event, this refers to the element that received the event.
f) Methods like call(), apply(), and bind() can refer this to any object.


5) Accessing Object Methods: objectName.methodName() like: name = person.fullName();. If you access a method without the () parentheses, it will return the function definition like: name = person.fullName;



6) Do Not Declare Strings, Numbers, and Booleans as Objects!: When a JavaScript variable is declared with the keyword "new", the variable is created as an object. Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed. 
a) x = new String();        // Declares x as a String object
b) y = new Number();        // Declares y as a Number object
c) z = new Boolean();       // Declares z as a Boolean object


*/

// Object Methods
// this refers to the person object. this.firstName means the firstName property of person. this.lastName means the lastName property of person.
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };



