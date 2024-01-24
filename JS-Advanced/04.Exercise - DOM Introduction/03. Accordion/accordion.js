function toggle() {
    const btnRef = document.getElementsByClassName('button')[0];
    const extraRef = document.getElementById('extra');

    if (btnRef.textContent == 'More') {
        btnRef.textContent = 'Less';
        extraRef.style.display = 'block';
    } else if (btnRef.textContent == 'Less') {
        btnRef.textContent = 'More';
        extraRef.style.display = 'none';
    }
}