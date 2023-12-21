/*
1) JavaScript HTML DOM(Document Object Model): With the HTML DOM, JavaScript can access and change all the elements of an HTML document. When a web page is loaded, the browser creates a Document Object Model of the page. The HTML DOM model is constructed as a tree of Objects.

2) With the object model, JavaScript gets all the power it needs to create dynamic HTML:
    a) JavaScript can change all the HTML elements in the page
    b) JavaScript can change all the HTML attributes in the page
    c) JavaScript can change all the CSS styles in the page
    d) JavaScript can remove existing HTML elements and attributes
    e) JavaScript can add new HTML elements and attributes
    f) JavaScript can react to all existing HTML events in the page
    g) JavaScript can create new HTML events in the page

3) What is the DOM?: The DOM is a W3C (World Wide Web Consortium) standard. The DOM defines a standard for accessing documents. The W3C DOM standard is separated into 3 different parts.
    a) Core DOM - standard model for all document types
    b) XML DOM - standard model for XML documents
    c) HTML DOM - standard model for HTML documents

4) What is the HTML DOM?: The HTML DOM is a standard object model and programming interface for HTML. In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements. It defines:
a) The HTML elements as objects
b) The properties of all HTML elements
c) The methods to access all HTML elements
d) The events for all HTML elements.

5) HTML DOM Methods: HTML DOM methods are actions you can perform (on HTML Elements). HTML DOM properties are values (of HTML Elements) that you can set or change. 

6) The DOM Programming Interface: The HTML DOM can be accessed with JavaScript (and with other programming languages). In the DOM, all HTML elements are defined as objects. The programming interface is the properties and methods of each object. A property is a value that you can get or set (like changing the content of an HTML element). A method is an action you can do (like add or deleting an HTML element). 

Ex: <p id="demo"></p>; document.getElementById("demo").innerHTML = "Hello World!"; Ans: Hello World!;
In the above example, getElementById is a method, while innerHTML is a property.

7) A) The getElementById Method: The most common way to access an HTML element is to use the id of the element. In the example    above the getElementById method used id="demo" to find the element. 
B) The innerHTML Property: The easiest way to get the content of an element is by using the innerHTML property. The innerHTML property is useful for getting or replacing the content of HTML elements. The innerHTML property can be used to get or change any HTML element, including <html> and <body>. 
 
                   ========================== 
8) HTML DOM Document: The HTML DOM document object is the owner of all other objects in your web page. The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object. 

9) Finding HTML Elements:
    a) document.getElementById(id) - (Method)	
    b) document.getElementsByClassName(name) - (Method)
    c) document.getElementsByTagName(name) - (Method)
    d) document.querySelector(name) 
    e) document.querySelectorAll(name)  

10) Changing HTML Elements:
    a) element.innerHTML: Change the inner HTML of an element - (Property)
    b element.attribute: the attribute value of an HTML element - (Property)
    c) element.style.property: Change the style of an HTML element - (Property)
    d) element.setAttribute(attribute, value) - (Method)

11) Adding and Deleting Elements
    a) document.createElement(element): Create an HTML element - (Method)
    b) document.removeChild(element): Remove an HTML element - (Method)
    c) document.appendChild(element): Add an HTML element - (Method)
    d) document.replaceChild(new, old): Replace an HTML element - (Method)
    e) document.write(text): Write into the HTML output stream - (Method)

12) Adding Events Handlers: 
    a) document.getElementById(id).onclick = function(){code}: Adding event handler code to an onclick event - (Method)

13) Finding HTML Objects:
    a) document.anchors: 	Returns all <a> elements that have a name attribute
    b) document.baseURI:  Returns the absolute base URI of the document
    c) document.body:  Returns the <body> element
    d) document.cookie:  Returns the document's cookie
    e) document.doctype:  Returns the document's doctype
    f) document.documentElement:  Returns the <html> element
    g) document.documentURI:  Returns the URI of the document
    h) document.domain:  Returns the domain name of the document server
    i) document.forms:  Returns all <form> elements
    j) document.head:  Returns the <head> element
    k) document.images:  Returns all <img> elements
    l) document.lastModified:  Returns the date and time the document was updated
    m) document.links:  Returns all <area> and <a> elements that have a href attribute
    n) document.scripts:  Returns all <script> elements
    o) document.title:  Returns the <title> element
    p) document.URL:  Returns the complete URL of the document

14) Get HTML Elements:
a) element.innerHTML : Get text & element
b) element.innerText : not get hedden text
c) element.textContent : also get hidden text 





*/

// ===========  JavaScript HTML DOM Elements =======

let a = document.getElementById("name").getAttribute("id")
console.log(a);
document.getElementById("name").getAttribute("class")

let b = document.getElementsByClassName("menu").getAttribute("class");
b.style.backgroundColor = "green"
b.style.borderRadius = "10px"

document.getElementById("heading").setAttribute("id", "pera")



// ============== Finding HTML Elements ===============

document.querySelector('h1');
document.querySelector('.menu');
document.querySelector('#heading');
document.querySelector('input[type="password"]');
document.querySelector('p:first-child');

const myul = document.querySelector('ul');
myul.querySelector('li')

const turnBlue = myul.querySelector("li")
turnBlue.style.backgroundColor = "green"
turnBlue.style.padding = "15px"

turnBlue.innerText
turnBlue.innerText = "Change inner Text"

document.querySelectorAll("li")
const lilist = document.querySelectorAll("li")
// lilist is a type of Node list

lilist.style.color = 'green' // this is not working because nodelist have multiple element.

lilist[2].style.color = "green"

const myH1 = document.querySelectorAll("h1")
myH1[1].style.color = "skyblue"

lilist.forEach(function(e){
    e.style.backgroundColor = "orange"
});


document.getElementsByClassName('list-item') // it provide HTMLCollection
const tempClassList = document.getElementsByClassName('list-item')
tempClassList.forEach(function(e){
    console.log(e); // foreach loop is not working on HTMLcollection
});

Array.from(tempClassList) // HTMLcollection now convert into array and now we use each for loop
const myConvertedArray = Array.from(tempClassList)
myConvertedArray.forEach(function(e){
    e.style.color = "brown"
    e.style.backgroundColor = "white"
    e.style.padding = "10px"
    e.innerText = "Robin"
})

