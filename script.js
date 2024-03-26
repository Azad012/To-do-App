const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<span>${taskText}</span><button>Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";

        li.querySelector("button").addEventListener("click", () => {
            taskList.removeChild(li);
        });
    }
});
