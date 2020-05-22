const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let userInput = prompt("Enter a task description");
  if (userInput != null && userInput.length > 0) {
    var unorderedListItem = document.createElement("LI");
    unorderedListItem.className = classNames.TODO_ITEM;
    unorderedListItem.id = getUniqueID();

    var checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    checkBox.className = classNames.TODO_CHECKBOX;
    checkBox.onchange = function () {updateUncheckedItemsCount()}

    var todoText = document.createElement("SPAN");
    todoText.className = classNames.TODO_TEXT;
    todoText.textContent = userInput;

    var deleteButton = document.createElement("BUTTON");
    deleteButton.textContent = "Delete";
    deleteButton.className = classNames.TODO_DELETE;
    deleteButton.onclick = function () {
      removeListItem(unorderedListItem.id);
    };

    unorderedListItem.appendChild(checkBox);
    unorderedListItem.appendChild(todoText);
    unorderedListItem.appendChild(deleteButton);

    list.appendChild(unorderedListItem);
    updateItemCount();
    updateUncheckedItemsCount()
  }
}

function getUniqueID(){
  return Date.now()
}

function removeListItem(id){
  list.removeChild(document.getElementById(id))
  updateItemCount()
}

function updateItemCount(){
  itemCountSpan.innerHTML = list.childElementCount
  updateUncheckedItemsCount()
}

function updateUncheckedItemsCount(){
  let uncheckedCount = 0;
  list.childNodes.forEach(item => {
    if (item.firstChild.checked == false){
        uncheckedCount++
    }
  })
  uncheckedCountSpan.innerHTML = uncheckedCount
}