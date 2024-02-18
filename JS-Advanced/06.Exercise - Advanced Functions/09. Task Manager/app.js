function solve() {
    const formRef = document.querySelector('form');
    const taskRef = document.getElementById('task');
    const descriptionRef = document.getElementById('description');
    const dateRef = document.getElementById('date');
    const addBtn = document.getElementById('add');
    const allSections = document.querySelectorAll('section');
    const openSection = allSections[1].children[1];
    const inProgressSection = allSections[2].children[1];
    const completeSection = allSections[3].children[1];

    formRef.addEventListener('submit', createData);

    function createData(event) {
        event.preventDefault();

        const task = taskRef.value;
        const description = descriptionRef.value;
        const date = dateRef.value;

        if (!task || !description || !date) {
            return;
        }

        const article = createArticle(task, description, date);
        openSection.appendChild(article);

        formRef.reset();
    }

    function createArticle(task, description, date) {
        const articleEl = createEl('article');
        articleEl.appendChild(createEl('h3', task));
        articleEl.appendChild(createEl('p', `Description: ${description}`));
        articleEl.appendChild(createEl('p', `Due Date: ${date}`));

        const divEl = createEl('div');
        divEl.classList.add('flex');

        const startBtn = createEl('button', 'Start');
        const deleteBtn = createEl('button', 'Delete');
        startBtn.classList.add('green');
        deleteBtn.classList.add('red');

        divEl.appendChild(startBtn);
        divEl.appendChild(deleteBtn);
        articleEl.appendChild(divEl);

        startBtn.addEventListener('click', startCourse);
        deleteBtn.addEventListener('click', onDelete);

        return articleEl;
    }

    function startCourse(event) {
        const article = event.target.parentElement.parentElement;
        event.target.parentElement.remove();

        inProgressSection.appendChild(article);

        const divEl = createEl('div');
        divEl.classList.add('flex');

        const deleteBtn = createEl('button', 'Delete');
        const finishBtn = createEl('button', 'Finish');
        deleteBtn.classList.add('red');
        finishBtn.classList.add('orange');

        divEl.appendChild(deleteBtn);
        divEl.appendChild(finishBtn);
        article.appendChild(divEl);

        deleteBtn.addEventListener('click', onDelete);
        finishBtn.addEventListener('click', onFinish);
    }

    function onDelete(event) {
        event.target.parentElement.parentElement.remove();
    }

    function onFinish(event) {
        const article = event.target.parentElement.parentElement;
        event.target.parentElement.remove();

        completeSection.appendChild(article);
    }

    function createEl(type, content) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        return element;
    }
}