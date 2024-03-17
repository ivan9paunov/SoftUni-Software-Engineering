import { html, render } from './node_modules/lit-html/lit-html.js';
import { del, get, post, put } from './requester.js';

const url = 'http://localhost:3030/jsonstore/collections/books';
const root = document.querySelector('body');

function mainTemplate() {
    return html`
    <button @click=${showBooks} id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>

    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input @click=${onSubmit} type="submit" value="Submit">
    </form>

    <form id="edit-form" style="display: none">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
`;
}

render(mainTemplate(), root);

const tbody = document.querySelector('tbody');
const addForm = document.getElementById('add-form');
const editForm = document.getElementById('edit-form');

function trTemplate(books) {
    return books.map(book => html`
        <tr data-id = ${book[0]}>
            <td>${book[1].title}</td>
            <td>${book[1].author}</td>
            <td>
                <button @click=${onEdit}>Edit</button>
                <button @click=${onDelete}>Delete</button>
            </td>
        </tr>`
    );
}

async function showBooks() {
    const data = await get(url);
    const books = Object.entries(data);
    render(trTemplate(books), tbody);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target.parentElement);

    const title = formData.get('title').trim();
    const author = formData.get('author').trim();

    await post(url, { author, title });
    showBooks();
    event.target.parentElement.reset();
}

function onEdit(event) {
    addForm.style.display = 'none';
    editForm.style.display = 'block';

    const bookRow = event.target.parentElement.parentElement;
    const bookId = bookRow.dataset.id;
    const bookName = bookRow.children[0].textContent;
    const bookAuthor = bookRow.children[1].textContent;

    editForm.children[3].value = bookName;
    editForm.children[5].value = bookAuthor;

    editForm.children[6].dataset.id = bookId;
    editForm.children[6].addEventListener('click', saveEdit);
}

async function saveEdit(event) {
    event.preventDefault();

    const bookId = event.target.dataset.id;
    const formData = new FormData(event.target.parentElement);
    const { title, author } = Object.fromEntries(formData);

    if (!title || !author) {
        return;
    }

    await put(url + '/' + bookId, { author, title });

    showBooks();
    event.target.parentElement.reset();
    editForm.style.display = 'none';
    addForm.style.display = 'block';
}

async function onDelete(event) {
    const bookId = event.target.parentElement.parentElement.dataset.id;

    await del(url + '/' + bookId);
    showBooks();
}