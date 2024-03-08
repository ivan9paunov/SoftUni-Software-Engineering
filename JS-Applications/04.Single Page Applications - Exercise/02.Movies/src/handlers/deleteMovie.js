import { showHomePage } from "../home.js";

export async function onDelete(event) {
    event.preventDefault();

    const movieId = event.target.dataset.id;
    const userData = JSON.parse(localStorage.getItem('user'));
    const url = `http://localhost:3030/data/movies/${movieId}`;
    
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'X-Authorization': userData.accessToken
            },
        });

        showHomePage();

    } catch (error) {
        alert(error.message);
    }
}