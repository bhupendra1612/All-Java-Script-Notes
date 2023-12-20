/*
1) How ot target DOM objects:
    a) Id Name: document.getElementById(Id)
    b) Class Name: document.getElementsByClassName(classname)
    c) Tag Name: document.getElementsByTagName(tagname)


What is can get with DOM : HTML, Text, Attribute
    a) innerText
    b) innerHTML
    c) getAttribute
    d) getAttributeNode
    e) Attribute


*/
// basic targeting element

let element;
element = document.all;
element = document.all[4];
element = document.head;
element = document.title;
element = document.body;
element = document.links;
element = document.links[2];
element = document.images;
element = document.images[3];
element = document.doctype;
element = document.URL;
element = document.domain;
element = document.baseURI;
element = document.anchors;
element = document.forms;
element = document.documentElement;



element = document.getElementById("header").innerText
element = document.getElementById("header").innerHTML
element = document.getElementById("header").getAttribute("class")
element = document.getElementById("header").getAttribute("id")
element = document.getElementById("header").getAttribute("style")
element = document.getElementById("header").getAttribute("onClick") 
element = document.getElementById("header").getAttributeNode("style")
element = document.getElementById("header").getAttributeNode("id")
element = document.getElementById("header").getAttributeNode("class")
element = document.getElementById("header").attributes
element = document.getElementById("header").attributes[1];
element = document.getElementById("header").attributes[3].value;
element = document.getElementById("header").attributes[3].name;


// DOM Set Methods

// a) innerText
// b) innerHTML
// c) setAttribute
// d) attribute
// e) removeAttribute


document.getElementById("header").innerText = "Hello World"
document.getElementById("header").innerHTML = "<h1>Hello World</h1> "

document.getElementById("header").setAttribute("class","xyz");
document.getElementById("header").setAttribute("style","border: 10px dotted black");

document.getElementById("header").Attribute[1].value="abc";

document.getElementById("header").removeAttribute("style")
document.getElementById("header").removeAttribute("class")



// New DOM Targeting Methods
// a) querySlector = document.querySelector(CSS Selector)
// b) querySlectorAll = document.querySelectorAll(CSS Selector)

document.querySelector("#header").innerHTML = "<h1>Hello World</h1>";
document.querySelector(".navbar").innerHTML = "<h1>Hello New World</h1>";

element = document.querySelector("#header").getAttribute("class")

element = document.querySelectorAll(".list")[1]
element = document.querySelectorAll(".list")[1].innerHTML

element = document.querySelectorAll("ul")
element = document.querySelectorAll("ul")[2].innerHTML

element = document.querySelectorAll("#header h1")
element = document.querySelectorAll("#header h1")[1].innerHTML;



// DOM CSS Styling Methods
// a) Style
// b) className
// c) classList

element = document.querySelector("#header").style.border;
element = document.querySelector("#header").style.color;

document.querySelector("#header").style.backgroundColor = "brown"
document.querySelector("#header").style.color = "blue"

document.querySelector("#header").className = "xyz"
document.querySelector("#header").className = "xyz abc"
element = document.querySelector("#header").className;

document.querySelector("#header").classlist = "xyz"
document.querySelector("#header").classlist.add("abc");
document.querySelector("#header").classlist.add("abc", "efg");
document.querySelector("#header").classlist.remove("abc");
document.querySelector("#header").classlist.remove("abc", "xyz", "efg");
element = document.querySelector("#header").classlist;



// Java Script Basic Events Attributes

//Assign Events Using the HTML DOM

Document.getElementById(id).onclick = functionName
Document.getElementById(id).onmouseenter = functionName

document.getElementById("header").onclick = abc;
function abc(){
    document.getElementById("header").style.background = "green";
};

// DOM addEventListener() Method

document.getElementById(id).addEventListener("click", functionName);
document.getElementById(id).addEventListener("click", function(){
});

document.getElementById("header").addEventListener("click", abc);
function abc(){
    document.getElementById("header").style.background = "green";
};

// add multiple eventlistener
document.getElementById("header").addEventListener("mouseenter", abc);
document.getElementById("header").addEventListener("click", function(){
    document.getElementById("header").style.border = "10px solid black";
});
function abc(){
    document.getElementById("header").style.background = "green";
};

// add same eventlistener on id
document.getElementById("header").addEventListener("click", abc);
document.getElementById("header").addEventListener("click", function(){
    document.getElementById("header").style.border = "10px solid black";
});
function abc(){
    document.getElementById("header").style.background = "green";
};

// use this function
document.getElementById("header").addEventListener("click", function(){
    this.style.border = "10px solid black";
});

// UseCapture
// addEventListener(event, function, useCapture);

document.querySelector("#inner").addEventListener('click', function(){
    alert('Inner Div')
});
document.querySelector("#outer").addEventListener('click', function(){
    alert('Outer Div')
});

document.querySelector("#inner").addEventListener('click', function(){
    alert('Inner Div')
},true);
document.querySelector("#outer").addEventListener('click', function(){
    alert('Outer Div')
},true);


// DOM removeEventListener() Method

element.removeEventListener("ondblclick",functionName);

document.getElementById("header").addEventListener("mouseenter", abc);


function abc(){
    document.getElementById("header").style.background = "green";
};


// Class List Methods

// a) add(class1, class2, ...)
// b) remove(class1, class2, ...)
// c) toggle(class)
// d) contains(class)
// e) item (index)
// f) length

// add
document.getElementById("header").addEventListener("click", abc);
function abc(){
    document.getElementById("header").classList.add("xyz", "efg");
    let a = document.getElementById("header").classList;
    console.log(a);
};

// remove
document.getElementById("header").addEventListener("click", abc);
function abc(){
    document.getElementById("header").classList.remove("xyz");
    let b = document.getElementById("header").classList;
    console.log(b);
};

// length
document.getElementById("header").addEventListener("click", abc);
function abc(){
    let b = document.getElementById("header").classList.length;
    console.log(b);
};

// toggle
document.getElementById("header").addEventListener("click", abc);
function abc(){
    document.getElementById("header").classList.toggle("xyz");
    let b = document.getElementById("header").classList.length;
    console.log(b);
};

// item
document.getElementById("header").addEventListener("click", abc);
function abc(){
    let b = document.getElementById("header").classList.item(1);
    console.log(b);
};

// contains
document.getElementById("header").addEventListener("click", abc);
function abc(){
    let b = document.getElementById("header").classList.contains("xyz");
    console.log(b);
};













