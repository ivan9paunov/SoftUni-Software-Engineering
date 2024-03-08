import { showDetails } from "../details.js";

export function createMovieCard(data) {
    const userData = JSON.parse(localStorage.getItem('user'));

    const liElement = document.createElement('li');
    liElement.style.listStyleType = 'none';
    liElement.dataset.owner = data._ownerId;

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
    anchor.href = `/details/${data._id}`;
    const detailsBtn = document.createElement('button');
    detailsBtn.type = 'button';
    detailsBtn.classList.add('btn');
    detailsBtn.classList.add('btn-info');
    detailsBtn.textContent = 'Details';
    detailsBtn.dataset.id = data._id;

    anchor.appendChild(detailsBtn);
    divBody.appendChild(hElement);
    divBody.appendChild(anchor);
    divCard.appendChild(imgElement);
    divCard.appendChild(divBody);

    liElement.appendChild(divCard);

    // if (userData) {
        detailsBtn.addEventListener('click', showDetails);
        detailsBtn.style.display = 'inline-block';
    // } else {
    //     detailsBtn.style.display = 'inline-block';
    //     detailsBtn.addEventListener('click', function (event) {
    //         event.preventDefault();
    //     });
    // }   // ==> To work in softuni judge system


    return liElement;
}