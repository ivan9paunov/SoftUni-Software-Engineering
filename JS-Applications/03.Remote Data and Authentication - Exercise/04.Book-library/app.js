const tableBody = document.querySelector('table tbody');
tableBody.replaceChildren();

const formRef = document.querySelector('form');
const [titleRef, authorRef, submitBtn] = Array.from(formRef.elements);
formRef.reset();

const url = 'http://localhost:3030/jsonstore/collections/books';

submitBtn.addEventListener('click', onCreate);
document.getElementById('loadBooks').addEventListener('click', onLoad);

async function onCreate(event) {
    event.preventDefault();

    const title = titleRef.value;
    const author = authorRef.value;

    if (!title || !author) {
        return;
    }

    const request = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author, title })
    });

    onLoad();
    formRef.reset();
}

async function onLoad() {
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const data = await response.json();

    tableBody.replaceChildren();

    Object.entries(data).forEach(book => {
        const [id, tokens] = book;
        const trElement = createTableRow(id, tokens.title, tokens.author);
        tableBody.appendChild(trElement);
    });
}

function onEdit(event) {
    const trElement = event.target.parentElement.parentElement;
    const bookId = event.target.parentElement.parentElement.dataset.id;
    const title = trElement.children[0].textContent;
    const author = trElement.children[1].textContent;

    const saveBtn = createEl('button', 'Save');
    formRef.replaceChild(saveBtn, submitBtn);
    formRef.querySelector('h3').textContent = 'Edit FORM';
    titleRef.value = title;
    authorRef.value = author;

    saveBtn.addEventListener('click', (event) => {
        event.preventDefault();
        editMethod(bookId)
    });
}

async function editMethod(bookId) {
    const author = authorRef.value;
    const title = titleRef.value;
    
    const request = await fetch(url + '/' + bookId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author, title })
    });

    onLoad();
    
    const saveBtn = formRef.querySelector('button');
    formRef.replaceChild(submitBtn, saveBtn);
    formRef.querySelector('h3').textContent = 'FORM';
    titleRef.value = '';
    authorRef.value = '';
}

async function onDelete(event) {
    const bookId = event.target.parentElement.parentElement.dataset.id;
    
    const request = await fetch(url + '/' + bookId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    onLoad();
}

function createTableRow(id, author, title) {
    const trElement = createEl('tr');
    trElement.dataset.id = id;
    trElement.appendChild(createEl('td', author));
    trElement.appendChild(createEl('td', title));

    const btnsTd = createEl('td');
    const editBtn = createEl('button', 'Edit');
    const deleteBtn = createEl('button', 'Delete');
    btnsTd.appendChild(editBtn);
    btnsTd.appendChild(deleteBtn);

    editBtn.addEventListener('click', onEdit);
    deleteBtn.addEventListener('click', onDelete);

    trElement.appendChild(btnsTd);

    return trElement;
}

function createEl(type, content) {
    const el = document.createElement(type);

    if (content) {
        el.textContent = content;
    }

    return el;
}