import { getLikes } from "./getLikes.js";

export async function giveLike(event) {
    const userData = JSON.parse(localStorage.getItem('user'));
    const url = `http://localhost:3030/data/likes`;
    const movieId = event.target.dataset.id;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify({ movieId })
        });


        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        
        const targetSection = document.querySelector('#movie-example');
        targetSection.querySelector('.btn-primary').style.display = 'none';
        targetSection.querySelector('span').textContent = `Liked ${await getLikes(movieId)}`;
        targetSection.querySelector('span').style.display = 'inline-block';

    } catch (error) {
        alert(error.message);
    }
}