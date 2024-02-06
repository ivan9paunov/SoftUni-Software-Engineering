function validate() {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let input = document.getElementById('email');

    input.addEventListener('change', noMatch);

    function noMatch(event) {
        let inputValue = event.target.value;
        
        input.classList.remove('error');
        
        if (!inputValue.match(pattern)) {
            input.classList.add('error');
        }
        
    }
}