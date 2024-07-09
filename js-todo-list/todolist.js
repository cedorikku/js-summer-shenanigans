const addButton = document.querySelector('#addButton');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

addButton.addEventListener('click', () => {
  if (!taskInput.value.trim()) {
    // TODO throw clear error message
    console.log("No item added");
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = taskInput.value;
  taskList.appendChild(listItem);

  console.log("An item was added");
});