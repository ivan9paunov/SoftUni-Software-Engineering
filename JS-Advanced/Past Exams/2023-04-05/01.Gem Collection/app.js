window.addEventListener("load", solve);

function solve() {
    const formRef = document.querySelector('form');
    const gemNameRef = document.getElementById('gem-name');
    const colorRef = document.getElementById('color');
    const caratsRef = document.getElementById('carats');
    const priceRef = document.getElementById('price');
    const typeRef = document.getElementById('type');
    const addBtn = document.getElementById('add-btn');
    const previewSection = document.getElementById('preview-list');
    const collectionSection = document.getElementById('collection');

    addBtn.addEventListener('click', createData);

    function createData() {
        const name = gemNameRef.value;
        const color = colorRef.value;
        const carats = caratsRef.value;
        const price = priceRef.value;
        const type = typeRef.value;

        if (!name || !color || !carats || !price || !type) {
            return;
        }

        const listItem = createListItem(name, color, carats, price, type);
        previewSection.appendChild(listItem);

        addBtn.disabled = true;
        formRef.reset();
    }

    function createListItem(name, color, carats, price, type) {
        const liElement = createEl('li');
        liElement.classList.add('gem-info');
        liElement.appendChild(createArticle(name, color, carats, price, type));

        const saveBtn = createEl('button', 'Save to Collection');
        const editBtn = createEl('button', 'Edit Information');
        const cancelBtn = createEl('button', 'Cancel');

        saveBtn.classList.add('save-btn');
        editBtn.classList.add('edit-btn');
        cancelBtn.classList.add('cancel-btn');

        liElement.appendChild(saveBtn);
        liElement.appendChild(editBtn);
        liElement.appendChild(cancelBtn);

        saveBtn.addEventListener('click', () => toCollection(name, color, carats, price, type));
        editBtn.addEventListener('click', () => onEdit(name, color, carats, price, type));
        cancelBtn.addEventListener('click', onCancel);

        return liElement;
    }

    function toCollection(name, color, carats, price, type) {
        previewSection.textContent = '';

        const liElement = createEl('li');
        collectionSection.appendChild(liElement);
        const pElement = createEl('p', `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`);
        pElement.classList.add('collection-item');
        liElement.appendChild(pElement);

        addBtn.disabled = false;
    }

    function onEdit(name, color, carats, price, type) {
        gemNameRef.value = name;
        colorRef.value = color;
        caratsRef.value = carats;
        priceRef.value = price;
        typeRef.value = type;

        previewSection.textContent = '';
        addBtn.disabled = false;
    }

    function onCancel(event) {
        event.target.parentElement.remove();
        addBtn.disabled = false;
    }

    function createArticle(name, color, carats, price, type) {
        const articleEl = createEl('article');
        articleEl.appendChild(createEl('h4', `${name}`));
        articleEl.appendChild(createEl('p', `Color: ${color}`));
        articleEl.appendChild(createEl('p', `Carats: ${carats}`));
        articleEl.appendChild(createEl('p', `Price: ${price}$`));
        articleEl.appendChild(createEl('p', `Type: ${type}`));

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
