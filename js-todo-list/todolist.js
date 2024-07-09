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
  const complete = document.createElement('button');
  complete.textContent = "Done";
  complete.addEventListener('click', event => { completeTask(event) });

  listItem.appendChild(complete);
  taskList.appendChild(listItem);

  taskInput.value = "";
  taskInput.focus();
  console.log("An item was added");
});


function completeTask(event) {
  event.target.parentNode.remove();

  taskInput.focus();
  console.log("A task was completed");
}