function attachEvents() {
    const ulElement = document.getElementById('phonebook');

    const url = 'http://localhost:3030/jsonstore/phonebook';

    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate);

    async function onLoad() {
        await getPeopleData();
    }

    async function onCreate() {
        const personRef = document.getElementById('person');
        const phoneRef = document.getElementById('phone');
        const person = personRef.value;
        const phone = phoneRef.value;

        try {
            const request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ person, phone })
            });

            if (!request.ok) {
                const error = await request.json();
                throw new Error(error.message);
            }

            getPeopleData();

            personRef.value = '';
            phoneRef.value = '';

        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }

    async function onDelete(event) {
        const userID = event.target.parentElement.dataset.id;
        
        const request = await fetch(url + '/' + userID, { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            } 
        });

        getPeopleData();
    }

    async function getPeopleData() {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message);
            }

            if (response.status == 204) {
                throw new Error('There is no records in the phonebook. You have to create!');
            }
            const data = await response.json();

            ulElement.replaceChildren();

            Object.values(data).forEach(el => {
                const liElement = createLi(el.person, el.phone, el._id);
                ulElement.appendChild(liElement);
            });

        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }

    function createLi(person, phone, id) {
        const liElement = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        liElement.textContent = `${person}: ${phone}`;
        liElement.appendChild(deleteBtn);
        liElement.dataset.id = id;

        deleteBtn.addEventListener('click', onDelete);

        return liElement;
    }
}

attachEvents();