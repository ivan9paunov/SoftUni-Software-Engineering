let userData = null;
const catches = document.getElementById('catches');

window.addEventListener('DOMContentLoaded', async () => {
    userData = JSON.parse(localStorage.getItem('user'));
    
    catches.replaceChildren();
    
    toggleBtns();
    
    //Home button
    document.getElementById('home').addEventListener('click', () => {
        window.location = 'index.html';
    });
    //Logout button
    document.getElementById('logout').addEventListener('click', onLogout);
    //Load button
    document.querySelector('.load').addEventListener('click', onLoad);
    //Add button
    document.getElementById('addForm').addEventListener('submit', onAdd);
});

async function onLoad() {
    try {
        const response = await fetch('http://localhost:3030/data/catches')

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }

        catches.replaceChildren(...data.map(createCatch));
        
    } catch (err) {
        alert(err.message);
    }
}

async function onAdd(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let { angler, weight, species, location, bait, captureTime } = Object.fromEntries(formData);

    const url = 'http://localhost:3030/data/catches';

    try {
        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            throw new Error('All inputs must be filled!');
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        await onLoad();
        addForm.reset();

    } catch (error) {
        alert(error.message);
    }
}

async function onLogout() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const url = 'http://localhost:3030/users/logout';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'X-Authorization': userData.accessToken }
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        localStorage.removeItem('user');
        window.location = 'index.html';

    } catch (error) {
        alert(error.message);
    }
}

async function toggleBtns() {
    const user = document.getElementById('user');
    const guest = document.getElementById('guest');
    const addBtn = document.querySelector('.add');
    const greetingName = document.querySelector('.email > span');

    if (userData) {
        user.style.display = 'inline-block';
        guest.style.display = 'none';
        greetingName.textContent = userData.email;
        addBtn.disabled = false;
        await onLoad();
    } else {
        user.style.display = 'none';
        guest.style.display = 'inline-block';
        greetingName.textContent = 'guest';
        addBtn.disabled = true;
    }
}

function createCatch(data) {
    const isOwner = userData && data._ownerId === userData._id;

    const catchDiv = document.createElement('div');
    catchDiv.classList.add('catch');
    catchDiv.dataset.id = data._id;

    catchDiv.appendChild(createLabel('Angler'));
    const anglerInput = createInput('text', 'angler', data.angler);
    anglerInput.disabled = isOwner ? false : true;
    catchDiv.appendChild(anglerInput);

    catchDiv.appendChild(createLabel('Weight'));
    const weightInput = createInput('text', 'weight', data.weight);
    weightInput.disabled = isOwner ? false : true;
    catchDiv.appendChild(weightInput);

    catchDiv.appendChild(createLabel('Species'));
    const speciesInput = createInput('text', 'species', data.species);
    speciesInput.disabled = isOwner ? false : true;
    catchDiv.appendChild(speciesInput);

    catchDiv.appendChild(createLabel('Location'));
    const locationInput = createInput('text', 'location', data.location);
    locationInput.disabled = isOwner ? false : true;
    catchDiv.appendChild(locationInput);

    catchDiv.appendChild(createLabel('Bait'));
    const baitInput = createInput('text', 'bait', data.bait);
    baitInput.disabled = isOwner ? false : true;
    catchDiv.appendChild(baitInput);

    catchDiv.appendChild(createLabel('Capture Time'));
    const captureTimeInput = createInput('number', 'captureTime', data.captureTime);
    captureTimeInput.disabled = isOwner ? false : true;
    catchDiv.appendChild(captureTimeInput);

    const updateBtn = createBtn('Update', 'update', data._id);
    const deleteBtn = createBtn('Delete', 'delete', data._id);
    updateBtn.disabled = isOwner ? false : true;
    deleteBtn.disabled = isOwner ? false : true;
    catchDiv.appendChild(updateBtn);
    catchDiv.appendChild(deleteBtn);

    updateBtn.addEventListener('click', onUpdate);
    deleteBtn.addEventListener('click', onDelete);

    return catchDiv;
}

async function onUpdate(event) {
    const catchDiv = event.target.parentElement;
    const userId = event.target.dataset.id;

    const angler = catchDiv.querySelector('.angler').value;
    const weight = catchDiv.querySelector('.weight').value;
    const species = catchDiv.querySelector('.species').value;
    const location = catchDiv.querySelector('.location').value;
    const bait = catchDiv.querySelector('.bait').value;
    const captureTime = catchDiv.querySelector('.captureTime').value;

    const url = `http://localhost:3030/data/catches/${userId}`;

    try {
        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            throw new Error('All inputs must be filled!');
        }

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

    } catch (error) {
        alert(error.message);
    }
}

async function onDelete(event) {
    const userId = event.target.dataset.id;
    const url = `http://localhost:3030/data/catches/${userId}`;

    try {
        event.target.parentElement.remove();
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'X-Authorization': userData.accessToken
            }
        });

    } catch (error) {
        alert(error.message);
    }
}

function createLabel(text) {
    const labelEl = document.createElement('label');
    labelEl.textContent = text;

    return labelEl;
}

function createInput(inputType, className, value) {
    const inputEl = document.createElement('input');
    inputEl.type = inputType;
    inputEl.classList.add(className);
    inputEl.value = value;

    return inputEl;
}

function createBtn(text, className, userId) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.classList.add(className);
    btn.dataset.id = userId;

    return btn;
}