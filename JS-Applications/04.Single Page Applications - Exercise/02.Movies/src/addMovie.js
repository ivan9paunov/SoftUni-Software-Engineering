import { showHomePage } from "./home.js";

export async function addMovie() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('add-movie').style.display = 'block';
}

const addForm = document.getElementById('add-movie-form');
addForm.addEventListener('submit', onAddMovie);


async function onAddMovie(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('img').trim();
    
    const url = 'http://localhost:3030/data/movies';
    const userData = JSON.parse(localStorage.getItem('user'));

    try {
        if (!title || !description || !img) {
            throw new Error('All fields must be filled in!');
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify({ title, description, img })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        addForm.reset();
        showHomePage();
        
    } catch (error) {
        
    }
}