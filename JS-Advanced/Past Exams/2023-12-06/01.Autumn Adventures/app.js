window.addEventListener('load', solve);

function solve() {
    //input refferences
    const formRef = document.querySelector('form');
    const timeRef = document.getElementById('time');
    const dateRef = document.getElementById('date');
    const placeRef = document.getElementById('place');
    const eventRef = document.getElementById('event-name');
    const emailRef = document.getElementById('email');
    const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementById('clear');
    const lastCheckRef = document.getElementById('check-list');
    const upcomingRef = document.getElementById('upcoming-list');
    const finishedRef = document.getElementById('finished-list');

    addBtn.addEventListener('click', createData);

    function createData() {
        const time = timeRef.value;
        const date = dateRef.value;
        const place = placeRef.value;
        const eventName = eventRef.value;
        const email = emailRef.value;

        if (!time || !date || !place || !eventName || !email) {
            return;
        }

        const listItem = createListItem(time, date, place, eventName, email);
        lastCheckRef.appendChild(listItem);

        addBtn.disabled = true;
        formRef.reset();
    }

    function createListItem(time, date, place, eventName, email) {
        const liElement = createEl('li');
        liElement.classList.add('event-content');
        liElement.appendChild(createArticle(time, date, place, eventName, email));

        const editBtn = createEl('button', 'Edit');
        editBtn.classList.add('edit-btn')
        const continueBtn = createEl('button', 'Continue');
        continueBtn.classList.add('continue-btn');

        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        editBtn.addEventListener('click', () => onEdit(time, date, place, eventName, email));
        continueBtn.addEventListener('click', toUpcoming);

        return liElement;
    }

    function onEdit(time, date, place, eventName, email) {
        timeRef.value = time;
        dateRef.value = date;
        placeRef.value = place;
        eventRef.value = eventName;
        emailRef.value = email;

        lastCheckRef.textContent = '';
        addBtn.disabled = false;
    }

    function toUpcoming(event) {
        const article = event.target.parentElement;
        upcomingRef.appendChild(article);

        const allBtns = Array.from(article.querySelectorAll('button'));
        allBtns.forEach((btn) => btn.remove());

        const moveBtn = createEl('button', 'Move to Finished');
        moveBtn.classList.add('finished-btn');
        article.appendChild(moveBtn);

        moveBtn.addEventListener('click', toFinished);
    }

    function toFinished(event) {
        const article = event.target.parentElement;
        article.querySelector('button').remove();
        
        finishedRef.appendChild(article);

        clearBtn.addEventListener('click', clearAll);
    }

    function clearAll(event) {
        event.target.parentElement.textContent = '';
        addBtn.disabled = false;
    }

    function createArticle(time, date, place, eventName, email) {
        const articleEl = createEl('article');
        articleEl.appendChild(createEl('p', `Begins: ${date} at: ${time}`));
        articleEl.appendChild(createEl('p', `In: ${place}`));
        articleEl.appendChild(createEl('p', `Event: ${eventName}`));
        articleEl.appendChild(createEl('p', `Contact: ${email}`));

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




