// 2) Створіть простий todoList з функціоналом додавати задачі в список і видаляти задачі при кліку на елемент списку.

//  Додаткове завдання:
//  * додати пошук по назві задачі в списку
//  ** Додати дату створення задачі ( час )
//  *** додати можливість редагувати елемент списку.
 
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".Add");
    const submitButton = document.querySelector(".Submit");
    const tasksContainer = document.getElementById("tasksList");
    const searchInput = document.getElementById("searchInput");
    const searchIcon = document.getElementById("searchIcon");
    searchIcon.style.cursor = "pointer";
    const taskStyles = {
      margin: "10px",
      padding: "10px",
      backgroundColor: "rgb(206, 242, 222)",
    };
    const deleteStyles = {
      backgroundColor: "rgb(255, 204, 255)",
      cursor: "pointer",
    };
  
    addButton.addEventListener("click", function (e) {
      e.preventDefault(); 
      const newTaskInput = document.getElementById("newTaskInput");
      const taskText = newTaskInput.value;
      newTaskInput.value = "";
  
      if (taskText.trim() === "") {
        alert("Введіть завдання.");
        return;
      }
  
      const taskDate = new Date();
      const taskId = generateTaskId(); // Генеруємо уникальний ідентифікатор для Завдання
  
      const taskElement = document.createElement("li");
      taskElement.id = taskId; // Встановлюємо ідентифікатор для Завдання
      Object.assign(taskElement.style, taskStyles);
      const taskContentElement = document.createElement("div");
      taskContentElement.style.display = "flex";
      taskContentElement.style.justifyContent = "space-between";
      taskElement.innerHTML = `
         <div class="task-row">
          <span class="task-text" contenteditable="true">${taskText}</span>
          <span class="task-date">(Створено: ${taskDate.toLocaleString()})</span>
          <span class="delete-task">🗑️</span>
        </div>
        `;
  
      // Додаємо обробник події для видалення Завдання
      const deleteTaskIcon = taskElement.querySelector(".delete-task");
      Object.assign(deleteTaskIcon.style, deleteStyles);
      deleteTaskIcon.addEventListener("click", function () {
        deleteTask(taskId); // Видаляємо Завдання по його ідентифікатору
        tasksContainer.removeChild(taskElement);
      });
  
      tasksContainer.appendChild(taskElement);
  
      saveTasks(); // Зберігаємо Завдання в localStorage
    });
  
    submitButton.addEventListener("click", function () {
      saveTasks();
    });
    
// Функція пошуку:
    searchIcon.addEventListener("click", function () {
      const searchKeyword = searchInput.value.toLowerCase();
      const taskTextElements = document.querySelectorAll(".task-text");

    taskTextElements.forEach(function (taskTextElement) {
      const taskText = taskTextElement.textContent.toLowerCase();
      const taskElement = taskTextElement.closest(".task-row");
      if (taskText.includes(searchKeyword)) {
        taskElement.style.display = "block";
      } else {
        taskElement.style.display = "none";
      }
      });
    });

    // Функція для завантаження Завдань із localStorage
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach(function (task) {
          const taskRow = document.createElement("li");
          taskRow.classList.add("task-row");
          Object.assign(taskRow.style, taskStyles);
          taskRow.innerHTML = `
              <span class="task-text" contenteditable="true">${task.text}</span>
              <span class="task-date">(Створено: ${task.date})</span>
              <span class="delete-task" style=deleteStyles>🗑️</span>
          `;

        // Додаємо обробник події для видалення Завдання
        const deleteTaskIcon = taskRow.querySelector(".delete-task");
        Object.assign(deleteTaskIcon.style, deleteStyles);
        deleteTaskIcon.addEventListener("click", function () {
            deleteTask(task.id);
            tasksContainer.removeChild(taskRow);
        });

        tasksContainer.appendChild(taskRow);
    });
};

    // Завантаження Завдань із localStorage при завантеженні сторінки
      loadTasks();
      
    // Функція для збереження Завдань в localStorage
    function saveTasks() {
      const taskRows = document.querySelectorAll(".task-row");
      const tasks = [];
      taskRows.forEach(function (taskRow) {
          const taskId = generateTaskId();
          const taskText = taskRow.querySelector(".task-text").textContent;
          const taskDate = taskRow.querySelector(".task-date").textContent.replace("(Створено: ", "").replace(")", "");
          tasks.push({ id: taskId, text: taskText, date: taskDate });
      });

      localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
    // Функція для видалення Завдань по ідентифікатору
    function deleteTask(taskId) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = tasks.filter(function (task) {
        return task.id !== taskId;
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  
    // Функція для генерування унікального ідентифікатора Завдань
    function generateTaskId() {
      return Date.now().toString(36);
    }
  });