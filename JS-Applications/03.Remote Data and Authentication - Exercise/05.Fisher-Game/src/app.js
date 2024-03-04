let userData;
const catches = document.getElementById('catches');

window.addEventListener('load', async () => {
    userData = JSON.parse(localStorage.getItem('user'));

    catches.replaceChildren();

    await toggleBtns();

    //Home button
    document.querySelector('a[id=home]').addEventListener('click', () => {
        window.location.reload();
    });
    //Logout button
    document.querySelector('a[id=logout]').addEventListener('click', onLogout);
    //Load button
    document.querySelector('.load').addEventListener('click', onLoad);
    //Add button
    document.querySelector('.add').addEventListener('click', onAdd);
});


async function onLoad() {
    const url = 'http://localhost:3030/data/catches';

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
    
        const data = await response.json();
        
        catches.replaceChildren();
    
        data.forEach(el => {
            const catchElement = createCatch(el.angler, el.weight, el.species, el.location, el.bait, el.captureTime, el._ownerId, el._id);
            catches.appendChild(catchElement);
        });
        
    } catch (error) {
        alert(error.message);
    }
}

async function onAdd(event) {
    event.preventDefault();

    const addForm = document.getElementById('addForm');
    const formData = new FormData(addForm);
    let { angler, weight, species, location, bait, captureTime } = Object.fromEntries(formData.entries());
    
    angler = angler.trim();
    weight = weight.trim();
    species = species.trim();
    location = location.trim();
    bait = bait.trim();
    captureTime = captureTime.trim();

    const url = 'http://localhost:3030/data/catches';
    
    try {
        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            throw new Error('All inputs must be filled!');
        }

        weight = Number(weight);
        captureTime = Number(captureTime);

        if (isNaN(weight)) {
            throw new Error('The weight value must be a number!');
        }

        if (!Number.isInteger(captureTime)) {
            throw new Error('The Capture Time value must be an integer!');
        }

        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
        });
        
        if (!request.ok) {
            const error = await request.json();
            throw new Error(error.message);
        }

        const el = await request.json();

        catches.appendChild(createCatch(el.angler, el.weight, el.species, el.location, el.bait, el.captureTime, el._ownerId, el._id));
        addForm.reset();

    } catch (error) {
        alert(error.message);
    }
}

async function onLogout() {
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

        localStorage.clear();
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
    } else {
        user.style.display = 'none';
        guest.style.display = 'inline-block';
        greetingName.textContent = 'guest';
        addBtn.disabled = true;
    }
}

function createCatch(angler, weight, species, location, bait, captureTime, ownerId, id) {
    let userId;
    
    if (userData) {
        userId = userData._id;
    }
    
    const catchDiv = document.createElement('div');
    catchDiv.classList.add('catch');

    catchDiv.appendChild(createLabel('Angler'));
    const anglerInput = createInput('text', 'angler', angler);
    anglerInput.disabled = userId == ownerId ? false : true;
    catchDiv.appendChild(anglerInput);

    catchDiv.appendChild(createLabel('Weight'));
    const weightInput = createInput('text', 'weight', weight);
    weightInput.disabled = userId == ownerId ? false : true;
    catchDiv.appendChild(weightInput);

    catchDiv.appendChild(createLabel('Species'));
    const speciesInput = createInput('text', 'species', species);
    speciesInput.disabled = userId == ownerId ? false : true;
    catchDiv.appendChild(speciesInput);

    catchDiv.appendChild(createLabel('Location'));
    const locationInput = createInput('text', 'location', location);
    locationInput.disabled = userId == ownerId ? false : true;
    catchDiv.appendChild(locationInput);

    catchDiv.appendChild(createLabel('Bait'));
    const baitInput = createInput('text', 'bait', bait);
    baitInput.disabled = userId == ownerId ? false : true;
    catchDiv.appendChild(baitInput);

    catchDiv.appendChild(createLabel('Capture Time'));
    const captureTimeInput = createInput('number', 'captureTime', captureTime);
    captureTimeInput.disabled = userId == ownerId ? false : true;
    catchDiv.appendChild(captureTimeInput);
    
    const updateBtn = createBtn('Update', 'update', id);
    const deleteBtn = createBtn('Delete', 'delete', id);
    updateBtn.disabled = userId == ownerId ? false : true;
    deleteBtn.disabled = userId == ownerId ? false : true;
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
    let weight = catchDiv.querySelector('.weight').value;
    const species = catchDiv.querySelector('.species').value;
    const location = catchDiv.querySelector('.location').value;
    const bait = catchDiv.querySelector('.bait').value;
    let captureTime = catchDiv.querySelector('.captureTime').value;
    
    const url = `http://localhost:3030/data/catches/${userId}`;
    
    try {
        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            throw new Error('All inputs must be filled!');
        }

        weight = Number(weight);
        captureTime = Number(captureTime);

        if (isNaN(weight)) {
            throw new Error('The weight value must be a number!');
        }

        if (!Number.isInteger(captureTime)) {
            throw new Error('The Capture Time value must be an integer!');
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

        // await onLoad();

    } catch (error) {
        alert(error.message);
    }
}

async function onDelete(event) {
    const userId = event.target.dataset.id;
    const url = `http://localhost:3030/data/catches/${userId}`;

    try {
        event.target.parentElement.remove();
        const request = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            }
        });

        if (!request.ok) {
            const error = await request.json();
            throw new Error(error.message);
        }
    
        // await onLoad();
        
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