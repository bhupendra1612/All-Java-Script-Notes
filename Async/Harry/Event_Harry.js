let button = document.getElementById("btn")



button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yes this is a single click & Enjoy it"
})

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = " This is a double click"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key)
})