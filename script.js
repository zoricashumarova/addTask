const newTaskEl = document.getElementById("newTask");
const btnEl = document.getElementById("addTaskBtn");
const taskListEl = document.getElementById("taskList");

const clickHandler = () => {
    const taskValue = newTaskEl.value;

    if (taskValue === "") {
        btnEl.disabled = true;
    }

    const newListElement = document.createElement('li');
    const spanElement = document.createElement('span');
    const completeBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const spanInSpanElement = document.createElement('span');


    taskListEl.appendChild(newListElement);
    newListElement.appendChild(spanElement);
    
    // spanElement.textContent = taskValue;
    spanElement.appendChild(spanInSpanElement);
    spanElement.appendChild(completeBtn);
    spanElement.appendChild(deleteBtn);
 
    spanInSpanElement.textContent = taskValue;
    completeBtn.textContent = 'Complete';
    deleteBtn.textContent = 'Delete';
    completeBtn.classList.add('btn');

    newTaskEl.value = "";
    btnEl.disabled = true;


    deleteBtn.addEventListener('click', function() {
        spanElement.textContent = "";
    })

    completeBtn.addEventListener('click', function() {
        spanElement.classList.add('btn-completed');
    })
}

btnEl.addEventListener('click', clickHandler);

const inputHandler = () => {
    if (newTaskEl.value) {
        btnEl.disabled = false;
    }
    else {
        btnEl.disabled = true;
    }
}

newTaskEl.addEventListener('input', inputHandler);