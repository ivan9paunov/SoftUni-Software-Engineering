window.addEventListener("load", solve);

function solve() {
    const formRef = document.querySelector('form');
    const nameRef = document.getElementById('snowman-name');
    const heightRef = document.getElementById('snowman-height');
    const locationRef = document.getElementById('location');
    const creatorRef = document.getElementById('creator-name');
    const attributeRef = document.getElementById('special-attribute');
    const addBtn = document.querySelector('.add-btn');
    const previewSection = document.querySelector('.snowman-preview');
    const snowmanSection = document.querySelector('.snow-list');
    const bodyRef = document.querySelector('.body');
    const mainRef = document.getElementById('hero');
    const bgImg = document.getElementById('back-img');

    formRef.addEventListener('submit', createData);

    function createData(event) {
        event.preventDefault();

        const name = nameRef.value;
        const height = heightRef.value;
        const location = locationRef.value;
        const creator = creatorRef.value;
        const attribute = attributeRef.value;

        if (!name || !height || !location || !creator || !attribute) {
            return;
        }

        const listItem = createListItem(name, height, location, creator, attribute);
        previewSection.appendChild(listItem);

        addBtn.disabled = true;
        formRef.reset();
    }

    function createListItem(name, height, location, creator, attribute) {
        const liElement = createEl('li');
        liElement.classList.add('snowman-info');
        liElement.appendChild(createArticle(name, height, location, creator, attribute));

        const btnsDiv = createEl('div');
        btnsDiv.classList.add('btn-container');

        const editBtn = createEl('button', 'Edit');
        const nextBtn = createEl('button', 'Next');
        editBtn.classList.add('edit-btn');
        nextBtn.classList.add('next-btn');
        btnsDiv.appendChild(editBtn);
        btnsDiv.appendChild(nextBtn);

        liElement.appendChild(btnsDiv);

        editBtn.addEventListener('click', () => onEdit(name, height, location, creator, attribute));
        nextBtn.addEventListener('click', toCreate);

        return liElement;
    }

    function onEdit(name, height, location, creator, attribute) {
        nameRef.value = name;
        heightRef.value = height;
        locationRef.value = location;
        creatorRef.value = creator;
        attributeRef.value = attribute;

        previewSection.textContent = '';
        addBtn.disabled = false;
    }

    function toCreate(event) {
        const article = event.target.parentElement.parentElement;
        article.className = 'snowman-content';
        event.target.parentElement.remove();

        snowmanSection.appendChild(article);
        const sendBtn = createEl('button', 'Send');
        sendBtn.classList.add('send-btn');

        const articleEl = article.children[0];
        articleEl.appendChild(sendBtn);

        sendBtn.addEventListener('click', onSend);
    }

    function onSend(event) {
        event.target.parentElement.parentElement.textContent = '';
        mainRef.remove();
        bgImg.removeAttribute("hidden");

        const backBtn = createEl('button', 'Back');
        backBtn.classList.add('back-btn');

        bodyRef.appendChild(backBtn);
        backBtn.addEventListener('click', onReset);
    }

    function onReset() {
        window.location.reload();
    }

    function createArticle(name, height, location, creator, attribute) {
        const articleEl = createEl('article');
        articleEl.appendChild(createEl('p', `Name: ${name}`));
        articleEl.appendChild(createEl('p', `Height: ${height}`));
        articleEl.appendChild(createEl('p', `Location: ${location}`));
        articleEl.appendChild(createEl('p', `Creator: ${creator}`));
        articleEl.appendChild(createEl('p', `Attribute: ${attribute}`));

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
