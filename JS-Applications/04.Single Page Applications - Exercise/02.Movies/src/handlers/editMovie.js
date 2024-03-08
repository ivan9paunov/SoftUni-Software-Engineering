import { getMovie } from "../details.js";

export async function onEdit(event) {
    const movieBlock = document.getElementById('movie-example');
    const editSection = document.getElementById('edit-movie');

    movieBlock.style.display = 'none';
    editSection.style.display = 'block';

    const formRef = editSection.querySelector('form');

    const title = formRef.querySelector('input[id=title]');
    const curTitle = movieBlock.querySelector('h1').textContent.split('Movie title: ')[1];
    const description = formRef.querySelector('textarea');
    const curDescription = movieBlock.querySelector('p').textContent;
    const img = formRef.querySelector('input[id=imageUrl]');
    const curImg = movieBlock.querySelector('img').src;

    title.value = curTitle;
    description.value = curDescription;
    img.value = curImg;

    const movieId = event.target.dataset.id;
    formRef.dataset.id = movieId;

    formRef.addEventListener('submit', submitEdit);
}

async function submitEdit(event) {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem('user'));
    const movieId = event.target.dataset.id;

    const formData = new FormData(event.target);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('img');

    const url = `http://localhost:3030/data/movies/${movieId}`;
    
    const response = await fetch(url, {
        method: 'PUT',
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

    const data = await response.json();
    const ownerId = data._ownerId;
    
    document.getElementById('edit-movie').style.display = 'none';
    getMovie(movieId, ownerId);
}