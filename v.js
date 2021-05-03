let todolist = [];
let sectionTag = document.querySelector("section");
let check = document.querySelectorAll("input");
let button = document.querySelectorAll("button");

function print(){
    sectionTag.innerHTML = "";
    for (i=0; i<todolist.length; i++){
        let newtext = 
        `
        <h2 class=${todolist[i].complete}><input type="checkbox" id= ${i+1})></button> &ensp; ${todolist[i].text} &ensp; <button id= ${-1 - i}>X</button></h2>
        `
        sectionTag.insertAdjacentHTML("beforeend", newtext)
    }    
}
document.querySelector('form').addEventListener("submit", function(event){
    console.log("event");
    event.preventDefault();
    let newobj = {
        text: document.querySelector('input').value,
        complete:false
    };
    todolist.push(newobj);
    print();
    button = document.querySelectorAll("button");
    for(let i = 1; i < button.length; i++){
        button[i].addEventListener('click',  function(){
            todolist.splice(i-1, 1);
            print() 
            })}
    check = document.querySelectorAll("input");        
    for (let i = 1; i < check.length; i++){
        check[i].addEventListener('click',  function(){
            todolist[i-1].complete = !(todolist[i-1].complete);
        print()
        })
    }
}
)
sectionTag.addEventListener("click", e => {
    check = document.querySelectorAll("input");        
    for (let i = 1; i < check.length; i++){
        check[i].addEventListener('click',  function(){
            todolist[i-1].complete = !(todolist[i-1].complete);
            print()
        })
    }
    button = document.querySelectorAll("button");
    for(let i = 1; i < button.length; i++){
        button[i].addEventListener('click',  function(){
            todolist.splice(i-1, 1);
            print() 
            })}
})     