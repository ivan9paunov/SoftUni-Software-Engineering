import { giveLike } from "./handlers/giveLike.js";
import { getLikes } from "./handlers/getLikes.js";
import { hasLikedCheck } from "./handlers/hasLikedCheck.js";
import { onEdit } from "./handlers/editMovie.js";
import { onDelete } from "./handlers/deleteMovie.js";

export async function showDetails(event) {
    event.preventDefault();

    document.querySelectorAll('section').forEach(section => section.style.display = 'none');

    const movieId = event.target.dataset.id;
    const ownerId = event.target.parentElement.parentElement.parentElement.parentElement.dataset.owner;

    getMovie(movieId, ownerId);
}

export async function getMovie(movieId, ownerId) {
    const url = `http://localhost:3030/data/movies/${movieId}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const userData = JSON.parse(localStorage.getItem('user'));
        const detailsSection = document.getElementById('movie-example');
        
        
        const movieData = await response.json();
        const likes = await getLikes(movieId);

        detailsSection.querySelector('h1').textContent = `Movie title: ${movieData.title}`;
        detailsSection.querySelector('img').src = movieData.img;
        detailsSection.querySelector('p').textContent = movieData.description;

        const [deleteBtn, editBtn, likeBtn] = detailsSection.querySelectorAll('a');
        likeBtn.dataset.id = movieId;
        editBtn.dataset.id = movieId;
        deleteBtn.dataset.id = movieId;
        const likesCounter = detailsSection.querySelector('span');

        if (!userData) {
            likeBtn.style.display = 'none';
            editBtn.style.display = 'none';
            deleteBtn.style.display = 'none';
        } else {
            const userId = userData._id;
            const hasLiked = await hasLikedCheck(movieId, userId);

            if (userData._id == ownerId) {
                deleteBtn.style.display = 'inline-block';
                editBtn.style.display = 'inline-block';
                likeBtn.style.display = 'none';
                likesCounter.textContent = `Liked ${Number(likes)}`;
            } else {
                deleteBtn.style.display = 'none';
                editBtn.style.display = 'none';
    
                // if (hasLiked) {
                    likeBtn.style.display = 'inline-block';
                    likesCounter.style.display = 'inline-block';
                    likesCounter.textContent = `Liked ${Number(likes)}`;
                // } else {
                //     likeBtn.style.display = 'inline-block';
                //     likesCounter.style.display = 'none';
                // }
            }
    
            likeBtn.addEventListener('click', giveLike);
            editBtn.addEventListener('click', onEdit);
            deleteBtn.addEventListener('click', onDelete);
        }


        detailsSection.style.display = 'block';

    } catch (error) {
        alert(error.message);
    }
}