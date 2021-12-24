

import("./index.css")

import React from "react";

import ReactDom from "react-dom";

function add(a,b){
    return a+b
}

console.log(add(2,8));

console.log(add(4,8));

// const h1 =  document.createElement("h1")

// h1.textContent = "Hello webpack!"




// h1.classList.add("hidden") 
// document.getElementById("root").appendChild(h1)

ReactDom.render(
    React.createElement("h1",{className:"hidden"},"HELLO WORLD!"),
    document.getElementById("root")
)



