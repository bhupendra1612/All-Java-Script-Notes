/*
1) JavaScript Maps: A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys. No duplicate value is present in Map.  In map all value is unique. Map is not iterable.

2) Essential Map Methods: 
    a) new Map(): Creates a new Map
    b) set(): Sets the value for a key in a Map
    c) get(): Gets the value for a key in a Map
    d) delete(): Removes a Map element specified by the key
    e) has(): Returns true if a key exists in a Map
    f) forEach(): Calls a function for each key/value pair in a Map
    g) entries(): Returns an iterator with the [key, value] pairs in a Map
    h) Property	Description
    i) size: Returns the number of elements in a Map

3) How to Create a Map: You can create a JavaScript Map by:
    a) Passing an Array to new Map()
    b) Create a Map and use Map.set()

4) The new Map() Method: You can create a Map by passing an Array to the new Map() constructor.

5) The set() Method: You can add elements to a Map with the set() method. The set() method can also be used to change existing Map values. 

*/

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruits);

// Set Map Values  
const fruits1 = new Map();
fruits1.set("apples", 700);
fruits1.set("bananas", 800);
fruits1.set("oranges", 900);
console.log(fruits1);

const contries = new Map()
contries.set('IN', "India")
contries.set('Eg', "England")
contries.set('Ja', "Japan")
contries.set('IN', "India")
console.log(contries);


for (const key of contries){
  console.log(contries);
};

for (const [key, value] of contries){
  console.log(key, value);
  console.log(key, ":-" ,value);
};

for (const key in contries){
    console.log(key); 
}; // Map is not iterable. for in loop not working

