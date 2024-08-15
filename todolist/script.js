document.querySelector('.add-btn').addEventListener('click', function() {
    const taskName = prompt("Digite o nome da nova atividade:");
    
    if (taskName) {
        const todoList = document.querySelector('.todo-list');
        const newTask = document.createElement('li');
        newTask.classList.add('todo-item');
        newTask.innerHTML = `
            ${taskName}
            <span class="icons">
                <i class="fas fa-pencil-alt edit-icon"></i>
                <i class="fas fa-trash delete-icon"></i>
            </span>
        `;
        todoList.appendChild(newTask);
        addTaskEventListeners(newTask);
    }
});

function addTaskEventListeners(taskItem) {
    const deleteIcon = taskItem.querySelector('.delete-icon');
    const editIcon = taskItem.querySelector('.edit-icon');

  
    deleteIcon.addEventListener('click', function() {
        taskItem.remove();
    });


    editIcon.addEventListener('click', function() {
        const newTaskName = prompt("Edite o nome da atividade:", taskItem.firstChild.textContent.trim());
        if (newTaskName) {
            taskItem.firstChild.textContent = newTaskName;
        }
    });
}


document.querySelectorAll('.todo-item').forEach(addTaskEventListeners);