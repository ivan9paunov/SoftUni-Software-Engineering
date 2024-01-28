function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach((button) => button.addEventListener('click', showMore));

    function showMore(event) {
        const btn = event.target;
        const divElement = btn.parentElement;
        const tick = divElement.querySelector('input[type="radio"]:checked').value;

        if (tick == 'unlock' && btn.textContent == 'Show more') {
            divElement.querySelector('div').style.display = 'block';
            btn.textContent = 'Hide it';
        } else if (tick == 'unlock' && btn.textContent == 'Hide it') {
            divElement.querySelector('div').style.display = 'none';
            btn.textContent = 'Show more';
        }
    }
}