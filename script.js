const input = document.querySelector("#text");
const button = document.querySelector("#button")
const list = document.querySelector("#list");

button.addEventListener("click",function(){
    const li = document.createElement("li");
    const buttondel = document.createElement("button");
    

    li.textContent = input.value;
    input.value = "";
   
    list.appendChild(li);
    
    buttondel.textContent = "Delete";
    li.appendChild(buttondel);

    buttondel.addEventListener("click", function(){
        list.removeChild(li);
       
    })

})