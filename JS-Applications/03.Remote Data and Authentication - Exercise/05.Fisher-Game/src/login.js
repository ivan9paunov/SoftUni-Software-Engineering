window.addEventListener('load', () => {
    toggleBtns();
    
    document.getElementById('login').addEventListener('submit', onLogin);
});

const notificationMsg = document.querySelector('.notification');

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const email = data.email.trim();
    const password = data.password.trim();
    
    const url = 'http://localhost:3030/users/login';
    
    try {
        if (!email || !password) {
            throw new Error('You must fill in all of the fields!');
        }

        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!request.ok) {
            const error = await request.json();
            throw new Error(error.message);
        }

        const userData = await request.json();
        
        localStorage.setItem('user', JSON.stringify(userData));

        notificationMsg.textContent = 'Login successful!';
    
        window.location = 'index.html';

    } catch (error) {
        notificationMsg.textContent = error.message;
    }
}

function toggleBtns() {
    const user = document.getElementById('user');
    const guest = document.getElementById('guest');
    const greetingName = document.querySelector('.email > span');
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        user.style.display = 'inline-block';
        guest.style.display = 'none';
        greetingName.textContent = userData.email;
    } else {
        user.style.display = 'none';
        guest.style.display = 'inline-block';
        greetingName.textContent = 'guest';
    }
}