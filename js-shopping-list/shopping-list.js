const itemList = document.querySelector('ul');
const input = document.getElementById('input');
const addButton = document.querySelector('button');

addButton.addEventListener('click', () => {
  const newItem = input.value;
  input.value = '';

  const newListItem = document.createElement('li');
  const listItemValue = document.createElement('span');
  const deleteButton = document.createElement('button');

  newListItem.appendChild(listItemValue);
  newListItem.appendChild(deleteButton);

  listItemValue.textContent = toString(newItem);
  deleteButton.textContent = "Delete";

  itemList.appendChild(newListItem);

  input.focus();
});