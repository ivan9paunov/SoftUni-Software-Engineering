function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    buttons.forEach((button) => button.addEventListener('click', converter));
    
    function converter(event) {
        const button = event.target;
        const divElement = button.parentElement;
        const value = divElement.children[1].value;
        const id = divElement.children[1].id;

        if (id == 'days') {
            hours.value = value * 24;
            minutes.value = value * 24 * 60;
            seconds.value = value * 24 * 60 * 60;
        } else if (id == 'hours') {
            days.value = value / 24;
            minutes.value = value * 60;
            seconds.value = value * 60 * 60;
        } else if (id == 'minutes') {
            days.value = value / 60 / 24;
            hours.value = value / 60;
            seconds.value = value * 60;
        } else if (id == 'seconds') {
            days.value = value / 60 / 60 / 24;
            hours.value = value / 60 / 60;
            minutes.value = value / 60;
        }
    }
}