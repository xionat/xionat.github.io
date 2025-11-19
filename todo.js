const todoList = document.querySelector('.todo-list');
const input = document.querySelector('#new-todo');
const addBtn = document.querySelector('#add-btn');

// Get list from local storage or create an empty one
let todos = JSON.parse(localStorage.getItem('todo-list')) || [];

// Function to render the todos
const renderTodos = () => {
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    li.classList.add('todo');
    todoList.appendChild(li);
  });
};

// Creates new todo when the button is clicked
addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') return;

  todos.push({ text, completed: false });

  // Save to local storage
  localStorage.setItem('todo-list', JSON.stringify(todos));
  input.value = '';

  // Re-render the list
  renderTodos();
});

renderTodos();