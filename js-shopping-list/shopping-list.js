const itemList = document.querySelector('ul');
const input = document.getElementById('item');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const newItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listButton = document.createElement('button');

  listItem.appendChild(listText);
  listItem.appendChild(listButton);

  listText.textContent = newItem;
  listButton.textContent = "Delete";

  itemList.appendChild(listItem);

  listButton.addEventListener('click', () => {
    itemList.removeChild(listItem);
  });

  input.focus();
});
