import '../styles/index.scss';

const todos = [];

const inputEl = document.getElementById('add-todo-input');
const todoItemsEl = document.getElementById('todo-items');
const completedItemsEl = document.getElementById('completed-items');

inputEl.addEventListener('keyup', e => {
    if (e.key === 'Enter' && inputEl.value != '') {
        var item = document.createElement("li");
        var itemValue = document.createTextNode(inputEl.value);
        item.appendChild(itemValue);

        todoItemsEl.appendChild(item);
        todos.push(item);

        item.addEventListener('click', e => {
            if (todoItemsEl.contains(item)) {
                completedItemsEl.appendChild(item);
            } else {
                todoItemsEl.appendChild(item);
            }
        })
    }
});