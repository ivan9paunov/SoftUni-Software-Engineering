import { giveLike } from "./handlers/giveLike.js";
import { getLikes } from "./handlers/getLikes.js";
import { hasLikedCheck } from "./handlers/hasLikedCheck.js";
import { onEdit } from "./handlers/editMovie.js";

export async function showDetails(event) {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem('user'));

    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    const detailsSection = document.getElementById('movie-example');
    
    const movieId = event.target.parentElement.parentElement.dataset.id;
    const ownerId = event.target.parentElement.parentElement.parentElement.dataset.owner;
    const userId = userData._id;

    const movieData = await getMovie(movieId);
    const likes = await getLikes(movieId);
    const hasLiked = await hasLikedCheck(movieId, userId);

    detailsSection.querySelector('h1').textContent = `Movie title: ${movieData.title}`;
    detailsSection.querySelector('img').src = movieData.img;
    detailsSection.querySelector('p').textContent = movieData.description;

    const [deleteBtn, editBtn, likeBtn] = detailsSection.querySelectorAll('a');
    likeBtn.dataset.id = movieId;
    editBtn.dataset.id = movieId;
    const likesCounter = detailsSection.querySelector('span');

    if (userData._id == ownerId) {
        deleteBtn.style.display = 'inline-block';
        editBtn.style.display = 'inline-block';
        likeBtn.style.display = 'none';
        likesCounter.textContent = `Liked ${likes}`;
    } else {
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';

        if (hasLiked) {
            likeBtn.style.display = 'none';
            likesCounter.style.display = 'inline-block';
            likesCounter.textContent = `Liked ${likes}`;
        } else {
            likeBtn.style.display = 'inline-block';
            likesCounter.style.display = 'none';
        }
    }

    likeBtn.addEventListener('click', giveLike);
    editBtn.addEventListener('click', onEdit);

    detailsSection.style.display = 'block';
}

async function getMovie(movieId) {
    const url = `http://localhost:3030/data/movies/${movieId}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        alert(error.message);
    }
}