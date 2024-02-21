function solution() {
    const [addGiftSection, listOfGiftsSection, sentGiftsSection, discardedGiftsSection] = document.querySelectorAll('.card');
    const inputField = addGiftSection.querySelector('input');
    const addBtn = addGiftSection.querySelector('button');

    addBtn.addEventListener('click', createGift);

    function createGift() {
        const giftName = inputField.value;

        const ulElement = listOfGiftsSection.children[1];
        const liElement = createListItem(giftName);
        ulElement.appendChild(liElement);

        softGifts(ulElement);

        inputField.value = '';
    }

    function softGifts(ulElement) {
        const gifts = Array.from(ulElement.children);
        gifts.sort((a, b) => a.textContent.localeCompare(b.textContent));
        ulElement.textContent = '';
        gifts.forEach((child) => ulElement.appendChild(child));
    }

    function createListItem(giftName) {
        const liElement = createEl('li');
        liElement.classList.add('gift');
        liElement.textContent = giftName;

        const sendBtn = createEl('button', 'Send');
        const discardBtn = createEl('button', 'Discard');
        sendBtn.setAttribute('id', 'sendButton');
        discardBtn.setAttribute('id', 'discardButton');

        liElement.appendChild(sendBtn);
        liElement.appendChild(discardBtn);

        sendBtn.addEventListener('click', send);
        discardBtn.addEventListener('click', discard);

        return liElement;
    }

    function send(event) {
        const liElement = event.target.parentElement;
        removeBtns(liElement);

        const ulElement = sentGiftsSection.children[1];
        ulElement.appendChild(liElement);
    }

    function discard(event) {
        const liElement = event.target.parentElement;
        removeBtns(liElement);

        const ulElement = discardedGiftsSection.children[1];
        ulElement.appendChild(liElement);
    }

    function removeBtns(liElement) {
        const btns = Array.from(liElement.querySelectorAll('button'));
        btns.forEach((btn) => btn.remove());
    }

    function createEl(type, content) {
        const el = document.createElement(type);

        if (content) {
            el.textContent = content;
        }

        return el;
    }
}