const inp = document.querySelector("input")
const add = document.querySelector(".add")
const todoBox = document.querySelector(".todo-list")

add.addEventListener('click', ()=>{
    const value = inp.value;
    if (value.trim() === "") return;
    todoBox.innerHTML += `
                <div class="li">
                    <h3>${value}</h3>
                    
                        <button class="Edit">Edit</button>
                        <button class="del">Delete</button>
                   
                </div>`

    inp.value = "";
    
})
todoBox.addEventListener("click", function(event) {

    
    if (event.target.classList.contains("del")){
        const todo = event.target.parentElement;
        todo.remove();
    }


  
    if (event.target.classList.contains("Edit")) {

        const todo = event.target.parentElement;

        const heading = todo.querySelector("h3");

        const input = document.createElement("input");

        input.value = heading.textContent;

        heading.replaceWith(input);

        event.target.innerText = "Save";

        event.target.classList.remove("Edit");
        event.target.classList.add("Save");
    }
});