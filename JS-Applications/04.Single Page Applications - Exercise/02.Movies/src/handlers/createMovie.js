import { showDetails } from "../details.js";

export function createMovieCard(data) {
    const userData = JSON.parse(localStorage.getItem('user'));

    const liElement = document.createElement('li');
    liElement.style.listStyleType = 'none';
    liElement.dataset.owner = data._ownerId;

    const divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.style.width = '242px';
    divCard.dataset.id = data._id;

    const imgElement = document.createElement('img');
    imgElement.src = data.img;
    imgElement.classList.add('card-img-top');
    imgElement.style.height = '256px';
    imgElement.alt = 'No image';

    const divBody = document.createElement('div');
    divBody.classList.add('card-body');
    const hElement = document.createElement('h5');
    hElement.classList.add('card-title');
    hElement.textContent = data.title;
    const anchor = document.createElement('a');
    anchor.href = `/details/${data._id}`;
    anchor.classList.add('btn');
    anchor.classList.add('btn-info');
    anchor.textContent = 'Details';

    divBody.appendChild(hElement);
    divBody.appendChild(anchor);
    divCard.appendChild(imgElement);
    divCard.appendChild(divBody);

    liElement.appendChild(divCard);

    if (userData) {
        anchor.style.display = 'inline-block';
    } else {
        anchor.style.display = 'none';
    }

    anchor.addEventListener('click', showDetails);

    return liElement;
}