import { showDetails } from "../details.js";

export function createMovieCard(data) {
    const liElement = document.createElement('li');
    liElement.style.listStyleType = 'none';

    const divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.style.width = '242px';

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
    anchor.href = '/details';
    anchor.classList.add('btn');
    anchor.classList.add('btn-info');
    anchor.textContent = 'Details';

    divBody.appendChild(hElement);
    divBody.appendChild(anchor);
    divCard.appendChild(imgElement);
    divCard.appendChild(divBody);

    liElement.appendChild(divCard);

    anchor.addEventListener('click', showDetails);

    return liElement;
}