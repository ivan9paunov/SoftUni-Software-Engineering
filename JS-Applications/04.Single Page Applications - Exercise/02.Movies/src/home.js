import { addMovie } from "./addMovie.js";
import { createMovieCard } from "./handlers/createMovie.js";

const addBtn = document.getElementById('add-movie-button');
const ulElement = document.getElementById('movies-list');

export function showHomePage() {
    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('home-page').style.display = 'block';
    showAddBtn();
    showMovieCatalog();
}

function showAddBtn() {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
        addBtn.style.display = 'block';
        addBtn.addEventListener('click', addMovie);
    }
}

async function showMovieCatalog() {
    document.getElementById('movie').style.display = 'block';

    const url = 'http://localhost:3030/data/movies';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();

        ulElement.replaceChildren(...data.map(createMovieCard));
        
    } catch (error) {
        alert(error.message);
    }
}