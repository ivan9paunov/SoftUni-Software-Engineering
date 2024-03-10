import { getTopic } from "./getTopic.js";

export function conversation(event) {
    document.querySelector('main').style.display = 'none';


    const movieId = event.target.parentElement.parentElement.dataset.id;
    console.log(movieId);
    // getTopic(movieId);

}