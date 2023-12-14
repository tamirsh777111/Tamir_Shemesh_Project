//add toDos
const addform = document.querySelector('form');
const list = document.querySelector('.todos');

const createTemplate = todo => {
    const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="bi bi-trash delete" onclick="removeTodo(this)"></i>
            </li>`;
    list.innerHTML += html;
};

addform.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addform.querySelector('.tt').value.trim(); // Use trim() to remove whitespace

    if (todo.length) {
        createTemplate(todo);
        addform.reset();
    }
    localStorage.setItem("shoppingList", JSON.stringify(todo));
    let user = JSON.parse(localStorage.getItem("todo"));
    console.log(user);
});

// Function to remove a todo item
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();

    }

});


