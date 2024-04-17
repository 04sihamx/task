document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskModal = document.getElementById('taskModal');
    const closeModal = document.querySelector('.close');
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    // Show modal when Add Task button is clicked
    addTaskBtn.addEventListener('click', function() {
        taskModal.style.display = 'block';
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener('click', function() {
        taskModal.style.display = 'none';
    });

    // Close modal when clicking outside the modal
    window.addEventListener('click', function(event) {
        if (event.target == taskModal) {
            taskModal.style.display = 'none';
        }
    });

    // Add task when form is submitted
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskName = taskForm.taskName.value.trim();
        const taskDescription = taskForm.taskDescription.value.trim();
        const taskDueDate = taskForm.taskDueDate.value.trim();

        if (taskName === '') {
            alert('Please enter a task name.');
            return;
        }

        // Create task element
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `
            <h3>${taskName}</h3>
            <p>${taskDescription}</p>
            <p>Due Date: ${taskDueDate}</p>
        `;

        // Add task to the task list
        taskList.appendChild(task);

        // Clear form fields
        taskForm.reset();

        // Close the modal
        taskModal.style.display = 'none';
    });
});
