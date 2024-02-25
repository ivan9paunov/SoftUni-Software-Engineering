window.addEventListener('load', solution);

function solution() {
    const fNameRef = document.getElementById('fname');
    const emailRef = document.getElementById('email');
    const phoneRef = document.getElementById('phone');
    const addressRef = document.getElementById('address');
    const codeRef = document.getElementById('code');
    const submitBtn = document.getElementById('submitBTN');
    const previewSection = document.getElementById('infoPreview');
    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');

    submitBtn.addEventListener('click', createData);

    function createData() {
        const fullName = fNameRef.value;
        const email = emailRef.value;
        const phone = phoneRef.value;
        const address = addressRef.value;
        const code = codeRef.value;

        if (!fullName || !email) {
            return;
        }

        appendListItems(fullName, email, phone, address, code);

        clearInputs();
        submitBtn.disabled = true;
    }

    function appendListItems(name, email, phone, address, code) {
        previewSection.appendChild(createEl('li', `Full Name: ${name}`));
        previewSection.appendChild(createEl('li', `Email: ${email}`));
        previewSection.appendChild(createEl('li', `Phone Number: ${phone}`));
        previewSection.appendChild(createEl('li', `Address: ${address}`));
        previewSection.appendChild(createEl('li', `Postal Code: ${code}`));

        editBtn.disabled = false;
        continueBtn.disabled = false;

        editBtn.addEventListener('click', () => onEdit(name, email, phone, address, code));
        continueBtn.addEventListener('click', onContinue);
    }

    function onEdit(name, email, phone, address, code) {
        fNameRef.value = name;
        emailRef.value = email;
        phoneRef.value = phone;
        addressRef.value = address;
        codeRef.value = code;

        previewSection.textContent = '';
        submitBtn.disabled = false;
        editBtn.disabled = true;
        continueBtn.disabled = true;
    }

    function onContinue() {
        const contentBlock = document.getElementById('block');
        contentBlock.textContent = '';
        contentBlock.appendChild(createEl('h3', 'Thank you for your reservation!'));
    }

    function createEl(type, content) {
        const el = document.createElement(type);

        if (content) {
            el.textContent = content;
        }

        return el;
    }

    function clearInputs() {
        fNameRef.value = '';
        emailRef.value = '';
        phoneRef.value = '';
        addressRef.value = '';
        codeRef.value = '';
    }
}