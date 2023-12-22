let form = document.getElementById("input-form");
let tasks = document.getElementById("tasks");
let task = document.querySelector(".first-input")

form.addEventListener("submit", function(event){
    event.preventDefault();
    //task div
    if (task.value ) {
        const inputEl = document.createElement("div");
    inputEl.classList.add("task");
    // const task = document.querySelector(".first-input");
    console.log(task.value);
    //content div
    const inputElContent = document.createElement("div");
    inputElContent.classList.add("content");
    
    //create input
    const taskInput = document.createElement("input");
    taskInput.classList.add("task-input")
    taskInput.value = task.value;
    taskInput.setAttribute("readonly", "readonly");
    //create Btn
    const button = document.createElement ("div");
    button.classList.add("btn"); 
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit"); 
    editBtn.innerText = ("Edit");
    //delete Btn 
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete";
    //complete btn 
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete");
    completeBtn.innerText = "Complete";

    editBtn.addEventListener("click", function() {
        if ( editBtn.innerText == "Edit") {
            editBtn.innerText = "Save";
            taskInput.removeAttribute("readonly");
            taskInput.focus
        }
        else{
            editBtn.innerText = "Edit";
            taskInput.setAttribute ("readonly", "readonly");
        }
    });

    deleteBtn.addEventListener("click", function() {
        console.log("test");
        tasks.removeChild(inputEl);
    });

    completeBtn.addEventListener("click", function () {
        completeBtn.innerText = "Conpleted";
        taskInput.classList.add ("completed")
    });



    //task div connect content
    inputEl.appendChild(inputElContent);
    tasks.appendChild(inputEl);
    inputElContent.appendChild(taskInput);
    inputElContent.appendChild(button);
    button.appendChild(editBtn);
    button.appendChild(deleteBtn);
    button.appendChild(completeBtn);
    task.value = "";
    }
   
    else{
        alert("please input some text")
    }


});


