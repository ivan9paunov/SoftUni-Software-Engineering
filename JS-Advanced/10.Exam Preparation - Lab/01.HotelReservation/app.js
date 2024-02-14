window.addEventListener('load', solve);

function solve() {
    const formRef = document.querySelector('form');
    const firstNameRef = document.getElementById('first-name');
    const lastNameRef = document.getElementById('last-name');
    const checkInRef = document.getElementById('date-in');
    const checkOutRef = document.getElementById('date-out');
    const peopleRef = document.getElementById('people-count');
    const nextBtn = document.getElementById('next-btn');
    const infoSection = document.querySelector('.info-list');
    const confirmSection = document.querySelector('.confirm-list');
    const verificationSection = document.getElementById('verification');

    formRef.addEventListener('submit', makeReservation);

    function makeReservation(event) {
        event.preventDefault();

        const firstName = firstNameRef.value;
        const lastName = lastNameRef.value;
        const checkIn = checkInRef.value;
        const checkOut = checkOutRef.value;
        const people = peopleRef.value;

        if (!firstName || !lastName || !checkIn || !checkOut || !people) {
            return;
        }

        if (new Date(checkIn).getTime() >= new Date(checkOut).getTime()) {
            return;
        }

        const listItem = createInfo(firstName, lastName, checkIn, checkOut, people);
        infoSection.appendChild(listItem);

        nextBtn.disabled = true;
        formRef.reset();
    }

    function createInfo(firstName, lastName, checkIn, checkOut, people) {
        const liElement = createEl('li');
        liElement.classList.add('reservation-content');
        const article = createArticle(firstName, lastName, checkIn, checkOut, people);
        const editBtn = createEl('button', 'Edit');
        const continueBtn = createEl('button', 'Continue');
        editBtn.classList.add('edit-btn');
        continueBtn.classList.add('continue-btn');
        
        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        editBtn.addEventListener('click', () => editInfo(firstName, lastName, checkIn, checkOut, people));
        continueBtn.addEventListener('click', confirmReservation);

        return liElement;
    }

    function editInfo(firstName, lastName, checkIn, checkOut, people) {
        firstNameRef.value = firstName;
        lastNameRef.value = lastName;
        checkInRef.value = checkIn;
        checkOutRef.value = checkOut;
        peopleRef.value = people;

        nextBtn.disabled = false;
        infoSection.textContent = '';
    }

    function confirmReservation(event) {
        const article = event.target.parentElement;
        confirmSection.appendChild(article);

        const oldBtns = Array.from(article.querySelectorAll('button'));
        oldBtns.forEach((btn) => btn.remove());

        const confirmBtn = createEl('button', 'Confirm');
        confirmBtn.classList.add('confirm-btn');
        const cancelBtn = createEl('button', 'Cancel');
        cancelBtn.classList.add('cancel-btn');

        article.appendChild(confirmBtn);
        article.appendChild(cancelBtn);

        confirmBtn.addEventListener('click', confirmation);
        cancelBtn.addEventListener('click', cancelReservation);
    }

    function confirmation(event) {
        event.target.parentElement.remove();
        nextBtn.disabled = false;
        verificationSection.classList.add('reservation-confirmed');
        verificationSection.textContent = 'Confirmed.'
    }

    function cancelReservation(event) {
        event.target.parentElement.remove();
        nextBtn.disabled = false;
        verificationSection.classList.add('reservation-cancelled');
        verificationSection.textContent = 'Cancelled.'
    }

    function createArticle(fName, lName, checkIn, checkOut, people) {
        const articleEl = createEl('article');
        articleEl.appendChild(createEl('h3', `Name: ${fName} ${lName}`));
        articleEl.appendChild(createEl('p', `From date: ${checkIn}`));
        articleEl.appendChild(createEl('p', `To date: ${checkOut}`));
        articleEl.appendChild(createEl('p', `For ${people} people`));

        return articleEl;
    }

    function createEl(type, content) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        return element;
    }
}



    
    
