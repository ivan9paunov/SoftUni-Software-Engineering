function solve() {
    const formRef = document.querySelector('form');
    const [nameRef, ageRef, kindRef, ownerRef, addBtn] = Array.from(formRef.elements);
    const adoptionSection = document.getElementById('adoption');
    const adoptedSection = document.getElementById('adopted');

    formRef.addEventListener('submit', createPet);

    function createPet(event) {
        event.preventDefault();

        const name = nameRef.value;
        let age = ageRef.value;
        const kind = kindRef.value;
        const owner = ownerRef.value;

        if (!name || !age || !kind || !owner) {
            return;
        }

        age = Number(age);
        if (isNaN(age)) {
            return;
        }

        const ulElement = adoptionSection.children[1];
        const liElement = createLi(name, age, kind, owner);
        ulElement.appendChild(liElement);

        formRef.reset();
    }

    function createLi(name, age, kind, owner) {
        const liElement = createEl('li');
        const pElement = createEl('p');
        const nameEl = createEl('strong', name);
        const ageEl = createEl('strong', age);
        const kindEl = createEl('strong', kind);
        const flyingText1 = document.createTextNode(' is a ');
        const flyingText2 = document.createTextNode(' year old ');
        pElement.appendChild(nameEl);
        pElement.appendChild(flyingText1);
        pElement.appendChild(ageEl);
        pElement.appendChild(flyingText2);
        pElement.appendChild(kindEl);
        

        liElement.appendChild(pElement);
        liElement.appendChild(createEl('span', `Owner: ${owner}`));

        const contactBtn = createEl('button', 'Contact with owner');
        liElement.appendChild(contactBtn);
        
        contactBtn.addEventListener('click', confirmation);

        return liElement;
    }

    function confirmation(event) {
        const liElement = event.target.parentElement;
        event.target.remove();

        const divEl = createEl('div');
        const inputEl = createEl('input');
        const yesBtn = createEl('button', 'Yes! I take it!');

        inputEl.setAttribute('placeholder', 'Enter your names');

        divEl.appendChild(inputEl);
        divEl.appendChild(yesBtn);
        liElement.appendChild(divEl);

        yesBtn.addEventListener('click', adopt);
    }

    function adopt(event) {
        const newOwner = event.target.parentElement.children[0].value;

        if (!newOwner) {
            return;
        }

        const liElement = event.target.parentElement.parentElement;
        liElement.children[1].textContent = `New Owner: ${newOwner}`;

        const ulElement = adoptedSection.children[1];
        ulElement.appendChild(liElement);

        event.target.parentElement.remove();

        const checkedBtn = createEl('button', 'Checked');
        liElement.appendChild(checkedBtn);

        checkedBtn.addEventListener('click', remove);
    }
    
    function remove(event) {
        event.target.parentElement.remove();
    }

    function createEl(type, content) {
        const el = document.createElement(type);

        if (content) {
            el.textContent = content;
        }

        return el;
    }
}

