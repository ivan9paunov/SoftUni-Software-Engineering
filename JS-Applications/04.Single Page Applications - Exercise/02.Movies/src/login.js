import { updateNav } from "./app.js";
import { showHomePage } from "./home.js";

const logForm = document.getElementById('login-form');
logForm.addEventListener('submit', onLogin);

export function showLoginSection() {
    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('form-login').style.display = 'block';
}

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password').trim();

    const url = 'http://localhost:3030/users/login';

    try {
        if (!email || !password) {
            throw new Error('All fields must be filled in!');
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
        logForm.reset();
        updateNav();
        showHomePage();
        
    } catch (error) {
        alert(error.message);
    }
}