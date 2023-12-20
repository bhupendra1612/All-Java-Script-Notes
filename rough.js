// Window object represent browser window and provide methods to control it. it is global object. window have DOM, BOM, and JavaScript Core. 

console.log("Harry")

let boxes = document.getElementsByClassName("box");
console.log(boxes);

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red";

document.getElementsByClassName("box").style.backgroundColor = "black";

document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 