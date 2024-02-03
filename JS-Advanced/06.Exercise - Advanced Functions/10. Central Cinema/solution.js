function solve() {
    const formRef = document.querySelector('form');
    const moviesSection = document.querySelector('#movies ul');
    const archiveSection = document.querySelector('#archive ul');
    const clearArchive = document.getElementById('archive').children[2];

    formRef.addEventListener('submit', addMovie);

    function addMovie(event) {
        event.preventDefault();
        let formRefElements = formRef.elements;
        let movieName = formRefElements[0].value;
        let hall = formRefElements[1].value;
        let ticketPrice = formRefElements[2].value;
        ticketPrice = Number(ticketPrice);

        if (!movieName || !hall || !ticketPrice || typeof ticketPrice != 'number') {
            return;
        }

        let movie = createMovie(movieName, hall, ticketPrice);
        moviesSection.appendChild(movie);

        formRefElements[0].value = "";
        formRefElements[1].value = "";
        formRefElements[2].value = "";
    }

    function createMovie(name, hall, price) {
        const liElement = document.createElement('li');
        const spanElement = document.createElement('span');
        const strongElHall = document.createElement('strong');
        const strongElPrice = document.createElement('strong');
        const divElement = document.createElement('div');
        const inputElement = document.createElement('input');
        const btnElement = document.createElement('button');

        liElement.appendChild(spanElement);
        liElement.appendChild(strongElHall);
        liElement.appendChild(divElement);
        divElement.appendChild(strongElPrice);
        divElement.appendChild(inputElement);
        divElement.appendChild(btnElement);

        spanElement.textContent = name;
        strongElHall.textContent = `Hall: ${hall}`;
        strongElPrice.textContent = price.toFixed(2);
        inputElement.placeholder = 'Tickets Sold';
        btnElement.textContent = 'Archive';
        
        btnElement.addEventListener('click', archiveCommand);

        return liElement;
    }

    function archiveCommand(event) {
        const archiveBtn = event.target;
        const inputElement = archiveBtn.parentElement.children[1];
        let quantity = inputElement.value;
        const pattern = /^[0-9]+$/;
        
        if (!pattern.test(quantity)) {
            return;
        }
        
        const movieElement = archiveBtn.parentElement.parentElement;
        const movieName = movieElement.children[0].textContent;
        quantity = Number(quantity);
        let price = archiveBtn.parentElement.children[0].textContent;
        price = Number(price);
        let totalPrice = price * quantity;

        let movie = archivedMovie(movieName, totalPrice);
        archiveSection.appendChild(movie);

        movieElement.remove();
    }

    function archivedMovie(name, price) {
        const liElement = document.createElement('li');
        const spanElement = document.createElement('span');
        const strongElement = document.createElement('strong');
        const btnElement = document.createElement('button');

        liElement.appendChild(spanElement);
        liElement.appendChild(strongElement);
        liElement.appendChild(btnElement);

        spanElement.textContent = name;
        strongElement.textContent = `Total amount: ${price.toFixed(2)}`;
        btnElement.textContent = 'Delete';

        btnElement.addEventListener('click', deleteMovie);

        return liElement;
    }

    function deleteMovie(event) {
        event.target.parentElement.remove();
    }

    clearArchive.addEventListener('click', clearArchiveSection);

    function clearArchiveSection(event) {
        const section = event.target.parentElement;
        let totalMovies = section.children[1].children.length;

        if (totalMovies) {
            let movies = Array.from(section.children[1].children);

            movies.forEach(movie => movie.remove());
        }
    }
}