import { updateNav } from "./app.js";
import { showHomePage } from "./home.js";

const regForm = document.getElementById('register-form');
regForm.addEventListener('submit', onRegister);

export function showRegisterSection() {
    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('form-sign-up').style.display = 'block';
}

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password').trim();
    const repPass = formData.get('repeatPassword').trim();

    const url = 'http://localhost:3030/users/register';

    try {
        if (!email || !password || !repPass) {
            throw new Error('All fields must be filled in!');
        }

        if (password != repPass) {
            throw new Error('Make sure your passwords match!');
        }

        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters!');
        }

        const request = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'appliation/json' },
            body: JSON.stringify({ email, password })
        });

        if (!request.ok) {
            const error = await request.json();
            throw new Error(error.message);
        }

        const userData = await request.json();

        localStorage.setItem('user', JSON.stringify(userData));
        regForm.reset();
        updateNav();
        showHomePage();
        
    } catch (error) {
        alert(error.message);
    }
}