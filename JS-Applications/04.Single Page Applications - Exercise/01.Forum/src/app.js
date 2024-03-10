import { homeView } from "./home.js";

const homeBtn = document.querySelector('header a');
homeBtn.href = '/home';

const routes = {
    '/home': homeView
};

homeBtn.addEventListener('click', onNavigate);

function onNavigate(event) {
    if (event.target.tagName !== 'A' || !event.target.href) {
        return;
    }
    event.preventDefault();
    const url = new URL(event.target.href);
    const path = url.pathname;
    routes[path]();
}

homeView();