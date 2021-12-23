import {add} from './calc'

import("./index.css")

console.log(add(3,4));
console.log(add(45,67));

var h1 = document.createElement('h1');
h1.textContent = 'TODO LIST';
h1.classList.add('head')



var add1 = document.getElementById("but")
add1.onclick = ()=>{
    var div = document.createElement('div')
    div.classList.add("tasks")
    var task = document.getElementById("input")
    //task.classList.add("taskgiven")
    var h3 = document.createElement('h3')
    h3.textContent = task.value
    h3.classList.add("taskgiven")
    var confirm = document.createElement("button")
    confirm.classList.add("done")
    confirm.onclick = ()=>{
        confirm.style.backgroundColor = "green"
        confirm.textContent = "COMPLETED"
    }
    confirm.textContent = "TASK IS DONE"
    var del = document.createElement("button")
    del.classList.add("remove")
    del.textContent = "DELETE"
    del.onclick = ()=>{
        div.remove()
    }
    div.append(h3,confirm,del)
    document.getElementById("content").appendChild(div)
}


document.getElementById("root").appendChild(h1);