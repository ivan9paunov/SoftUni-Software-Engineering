import { showRegisterSection } from "./register.js";
import { showHomePage } from "./home.js";
import { showLoginSection } from "./login.js";
import { onLogout } from "./logout.js";
import { getMovie } from "./details.js";
import { addMovie } from "./addMovie.js";

document.querySelectorAll('section').forEach(section => section.style.display = 'none');

const [welcomeMsg, logoutBtn] = Array.from(document.querySelectorAll('.nav-item.user'));
const [loginBtn, registerBtn] = Array.from(document.querySelectorAll('.nav-item.guest'));

//Update all nav hrefs
document.querySelector('.navbar-brand').href = '/home';
logoutBtn.children[0].href = '/logout';
loginBtn.children[0].href = '/login';
registerBtn.children[0].href = '/register';

const routes = {
    '/home': showHomePage,
    '/login': showLoginSection,
    '/register': showRegisterSection,
    '/logout': onLogout,
    '/addMovies': addMovie,
    '/details/:id': getMovie
};

document.querySelector('nav').addEventListener('click', onNavigate);

function onNavigate(event) {
    if (event.target.tagName !== 'A' || !event.target.href) {
        return;
    }
    event.preventDefault();
    const url = new URL(event.target.href);
    const path = url.pathname;
    routes[path]();
}

export function updateNav() {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        welcomeMsg.style.display = 'block';
        logoutBtn.style.display = 'block';
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';

        welcomeMsg.children[0].textContent = `Welcome, ${userData.email}`;
    } else {
        welcomeMsg.style.display = 'none';
        logoutBtn.style.display = 'none';
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
    }
}

updateNav();
showHomePage();