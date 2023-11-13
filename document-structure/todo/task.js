const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');


document.querySelector('.tasks__add').addEventListener('click', (event) => {
    event.preventDefault();
    if (taskInput.value){
        addTask();
    }
})

taskInput.addEventListener('keyup', (event) => {
    event.preventDefault();
    if(event.code === 'Enter' && taskInput.value) {
        addTask();
    }
})



const addTask = () => {
    const task = document.createElement('div');
    task.classList.add('task');
    tasksList.insertAdjacentElement("beforeend", task);
    
    const taskText = document.createElement('div');
    taskText.classList.add('task__title');
    taskText.textContent = taskInput.value;
    task.insertAdjacentElement("beforeend", taskText);

    task.innerHTML +='<a href="#" class="task__remove">&times;</a>';
    taskInput.value = '';

    const remove = task.querySelector('.task__remove');
    remove.addEventListener('click', (el) => {
        el.target.closest('.task').remove();
    })
}
