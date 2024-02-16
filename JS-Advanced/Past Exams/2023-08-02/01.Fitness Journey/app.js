window.addEventListener('load', solve);

function solve() {
    const formRef = document.querySelector('form');
    const nameRef = document.getElementById('name');
    const emailRef = document.getElementById('email');
    const contactRef = document.getElementById('contact-number');
    const classTypeRef = document.getElementById('class-type');
    const classTimeRef = document.getElementById('class-time');
    const nextBtn = document.getElementById('next-btn');
    const previewSection = document.querySelector('.class-info');
    const confirmSection = document.querySelector('.confirm-class');
    const mainRef = document.getElementById('main');
    const bodyRef = document.getElementById('body');

    formRef.addEventListener('submit', createData);

    function createData(event) {
        event.preventDefault();

        const name = nameRef.value;
        const email = emailRef.value;
        const contact = contactRef.value;
        const classType = classTypeRef.value;
        const classTime = classTimeRef.value;

        if (!name || !email || !contact || !classType || !classTime) {
            return;
        }

        const listItem = createListItem(name, email, contact, classType, classTime);
        previewSection.appendChild(listItem);

        nextBtn.disabled = true;
        formRef.reset();
    }

    function createListItem(name, email, contact, classType, classTime) {
        const liElement = createEl('li');
        liElement.classList.add('info-item');
        liElement.appendChild(createArticle(name, email, contact, classType, classTime));
        
        const editBtn = createEl('button', 'Edit');
        editBtn.classList.add('edit-btn');
        const continueBtn = createEl('button', 'Continue');
        continueBtn.classList.add('continue-btn');

        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        editBtn.addEventListener('click', () => onEdit(name, email, contact, classType, classTime));
        continueBtn.addEventListener('click', toConfirm);

        return liElement;
    }

    function onEdit(name, email, contact, classType, classTime) {
        nameRef.value = name;
        emailRef.value = email;
        contactRef.value = contact;
        classTypeRef.value = classType;
        classTimeRef.value = classTime;

        previewSection.textContent = '';
        nextBtn.disabled = false;
    }

    function toConfirm(event) {
        const article = event.target.parentElement;
        article.className = 'continue-info';
        const btns = Array.from(article.querySelectorAll('button'));
        btns.forEach((btn) => btn.remove());

        confirmSection.appendChild(article);

        const cancelBtn = createEl('button', 'Cancel');
        cancelBtn.classList.add('cancel-btn');
        const confirmBtn = createEl('button', 'Confirm');
        confirmBtn.classList.add('confirm-btn');

        article.appendChild(cancelBtn);
        article.appendChild(confirmBtn);

        cancelBtn.addEventListener('click', onCancel);
        confirmBtn.addEventListener('click', confirmation);
    }

    function onCancel(event) {
        event.target.parentElement.remove();
        nextBtn.disabled = false;
    }

    function confirmation() {
        mainRef.remove();
        const h1Element = createEl('h1', 'Thank you for scheduling your appointment, we look forward to seeing you!');
        h1Element.setAttribute('id','thank-you');
        const doneBtn = createEl('button', 'Done');
        doneBtn.setAttribute('id', 'done-btn');

        bodyRef.appendChild(h1Element);
        bodyRef.appendChild(doneBtn);

        doneBtn.addEventListener('click', onDone);
    }

    function onDone() {
        window.location.reload();
    }

    function createArticle(name, email, contact, classType, classTime) {
        const articleEl = createEl('article');
        articleEl.classList.add('personal-info');
        articleEl.appendChild(createEl('p', `${name}`));
        articleEl.appendChild(createEl('p', `${email}`));
        articleEl.appendChild(createEl('p', `${contact}`));
        articleEl.appendChild(createEl('p', `${classType}`));
        articleEl.appendChild(createEl('p', `${classTime}`));

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




