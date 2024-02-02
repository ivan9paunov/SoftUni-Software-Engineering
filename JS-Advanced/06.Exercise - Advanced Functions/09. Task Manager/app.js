function solve() {
    const [addTaskSection, openSection, inProgressSection, completeSection] = document.querySelectorAll('section');
    const formRef = document.querySelector('form');

    let btnHandler = {
        start: function (event) {
            let currentArticle = event.target.parentElement.parentElement;
            removeBtn(event.target.parentElement);
            currentArticle.innerHTML += getBtnPartial({ classes: 'red', text: 'Delete' },
                { classes: 'orange', text: 'Finish' });
            let btns = currentArticle.querySelectorAll('button');
            addEventListenerToButton(btns);
            inProgressSection.children[1].appendChild(currentArticle);
        },
        finish: function (event) {
            let currentArticle = event.target.parentElement.parentElement;
            removeBtn(event.target.parentElement);
            completeSection.children[1].appendChild(currentArticle);
        },
        delete: function (event) {
            let currentArticle = event.target.parentElement.parentElement;
            currentArticle.remove();
        }
    }

    formRef.addEventListener('submit', onSubmitHandler);

    function onSubmitHandler(event) {
        event.preventDefault();
        let formElements = event.target.elements;
        let taskName = formElements[0].value;
        let description = formElements[1].value;
        let dueDate = formElements[2].value;

        if (!taskName || !description || !dueDate) {
            return;
        }

        createArticle(taskName, description, dueDate);

        formElements[0].value = '';
        formElements[1].value = '';
        formElements[2].value = '';
    }

    function createArticle(task, description, dueDate) {
        const articleEl = document.createElement('article');
        articleEl.innerHTML = getArticleTemplate(task, description, dueDate);
        openSection.children[1].appendChild(articleEl);
        let btns = articleEl.querySelectorAll('button');
        addEventListenerToButton(btns);
    }

    function clickHandler(event) {
        let currentAction = event.target.innerText.toLowerCase();
        btnHandler[currentAction](event);
    }

    function addEventListenerToButton(btns) {
        Array.from(btns).forEach((btn) => btn.addEventListener('click', clickHandler));
    }

    function getArticleTemplate(task, description, dueDate) {
        return `<h3>${task}</h3>` +
                    `<p>Description: ${description}</p>` +
                    `<p>Due Date: ${dueDate}</p>` +
            getBtnPartial({ classes: 'green', text: 'Start' }, { classes: 'red', text: 'Delete' });
    }

    function getBtnPartial(btn1, btn2) {
        return `<div class="flex">` +
                    `<button class=${btn1.classes}>${btn1.text}</button>` +
                    `<button class=${btn2.classes}>${btn2.text}</button>` +
                `</div>`
    }

    function removeBtn(target) {
        target.remove();
    }
}