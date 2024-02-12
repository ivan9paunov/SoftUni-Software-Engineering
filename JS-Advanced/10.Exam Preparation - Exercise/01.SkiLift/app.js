window.addEventListener('load', solve);

function solve() {
    //input refferences
    const formRef = document.getElementById('append-ticket');
    const firstNameRef = document.getElementById('first-name');
    const lastNameRef = document.getElementById('last-name');
    const peopleCountRef = document.getElementById('people-count');
    const checkInDateRef = document.getElementById('from-date');
    const totalDaysRef = document.getElementById('days-count');
    const nextBtn = document.getElementById('next-btn');
    const ticketInfoRef = document.querySelector('.ticket-info-list');
    const confirmTicketRef = document.querySelector('.confirm-ticket');
    const mainPage = document.getElementById('main');
    const bodyElementRef = document.getElementById('body');

    formRef.addEventListener('submit', reservationData);

    function reservationData(event) {
        event.preventDefault();
        
        const firstName = firstNameRef.value;
        const lastName = lastNameRef.value;
        const people = peopleCountRef.value;
        const checkInDate = checkInDateRef.value;
        const totalDays = totalDaysRef.value;

        const isValid = validatingTheInputs(firstName, lastName, people, checkInDate, totalDays);

        if (isValid == false) {
            return;
        }

        nextBtn.disabled = true;

        const article = createArticle(firstName, lastName, people, checkInDate, totalDays);
        ticketInfoRef.appendChild(article);

        firstNameRef.value = '';
        lastNameRef.value = '';
        peopleCountRef.value = '';
        checkInDateRef.value = '';
        totalDaysRef.value = '';
    }

    function validatingTheInputs(fName, lName, people, dateIn, totalDays) {
        const isValid = true;

        if (!fName || !lName || !people || !dateIn || !totalDays) {
            return false;
        }

        if (typeof fName != 'string' || typeof lName != 'string') {
            return false;
        }

        people = Number(people);
        totalDays = Number(totalDays);
        if (typeof people != 'number' || typeof totalDays != 'number') {
            return false;
        }

        return isValid;
    }

    function createArticle(fName, lName, people, dateIn, totalDays) {
        const liElement = document.createElement('li');
        const articleEl = document.createElement('article');
        const h3Element = document.createElement('h3');
        const pElementDate = document.createElement('p');
        const pElementDays = document.createElement('p');
        const pElementPeople = document.createElement('p');
        const editBtn = document.createElement('button');
        const continueBtn = document.createElement('button');

        h3Element.textContent = `Name: ${fName} ${lName}`;
        pElementDate.textContent = `From date: ${dateIn}`;
        pElementDays.textContent = `For ${totalDays} days`;
        pElementPeople.textContent = `For ${people} people`;

        articleEl.appendChild(h3Element);
        articleEl.appendChild(pElementDate);
        articleEl.appendChild(pElementDays);
        articleEl.appendChild(pElementPeople);

        liElement.classList.add('ticket');
        liElement.appendChild(articleEl);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';

        editBtn.addEventListener('click', () => editData(fName, lName, people, dateIn, totalDays));
        continueBtn.addEventListener('click', toConfirmSection);

        return liElement;
    }

    function editData(fName, lName, people, dateIn, totalDays) {
        firstNameRef.value = fName;
        lastNameRef.value = lName;
        peopleCountRef.value = people;
        checkInDateRef.value = dateIn;
        totalDaysRef.value = totalDays;

        nextBtn.disabled = false;
        ticketInfoRef.textContent = '';
    }

    function toConfirmSection(event) {
        const article = event.target.parentElement;
        confirmTicketRef.appendChild(article);

        let buttons = Array.from(article.querySelectorAll('button'));

        buttons.forEach((btn) => btn.remove());

        const confirmBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');
        article.appendChild(confirmBtn);
        article.appendChild(cancelBtn);
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';

        confirmBtn.addEventListener('click', finishReservation);
        cancelBtn.addEventListener('click', cancelReservation);

        ticketInfoRef.textContent = '';
    }

    function cancelReservation(event) {
        const article = event.target.parentElement;
        article.remove();

        nextBtn.disabled = false;
    }

    function finishReservation() {
        mainPage.remove();

        const h1Element = document.createElement('h1');
        h1Element.textContent = 'Thank you, have a nice day!';
        h1Element.setAttribute('id','thank-you');

        const btnElement = document.createElement('button');
        btnElement.textContent = 'Back';
        btnElement.setAttribute('id','back-btn');

        bodyElementRef.appendChild(h1Element);
        bodyElementRef.appendChild(btnElement);

        btnElement.addEventListener('click', reloadPage);
    }

    function reloadPage() {
        window.location.reload();
    }
}