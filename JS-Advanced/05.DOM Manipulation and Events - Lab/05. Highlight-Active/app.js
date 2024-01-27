function focused() {
    const boxesContainer = document.querySelectorAll('div input');
    let boxes = Array.from(boxesContainer); 

    for (let box of boxes) {
        box.addEventListener('focus', onFocus);
        box.addEventListener('blur', focuseOut);
    }
    
    function onFocus(event) {
        let box = event.target.parentElement;
        box.classList.add('focused');
    }

    function focuseOut(event) {
        let box = event.target.parentElement;
        box.classList.remove('focused');
    }
}