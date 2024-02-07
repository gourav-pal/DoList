const taskInput=document.getElementById('taskInput')
const taskList=document.getElementById('tasklist')


function addTask() {
    const taskText=taskInput.value.trim();
    if(taskText !==''){
        const TaskItem=document.createElement('li');
        TaskItem.textContent=taskText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(TaskItem);
    };
    TaskItem.appendChild(deleteButton);

        // Append the task item to the task list
    taskList.appendChild(TaskItem);

        // Clear the input field
    taskInput.value = '';

}
}   

taskInput.addEventListener('keyup', function(event){
    if(event.key == 'Enter'){
        addTask();
    }
});