import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from './utility/userHelper.js';
import { showHomeView } from './views/home.js';
import { showEventsView } from './views/dashboard.js';
import { showDetailsView } from './views/details.js';
import { showLoginView } from './views/login.js';
import { onLogout } from './views/logout.js';
import { showRegisterView } from './views/register.js';
import { showAddEventView } from './views/addEvent.js';
import { showEditView } from './views/editEvent.js';

const root = document.querySelector('main');
root.replaceChildren();

page(updateContext);
page('/', showHomeView);
page('/events', showEventsView);
page('/details/:id', showDetailsView);
page('/add', showAddEventView);
page('/edit/:id', showEditView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', onLogout);

page.start();
updateNav();

function renderer(template) {
    render(template, root);
}

function updateContext(ctx, next) {
    ctx.render = renderer;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;
    next();
}

function updateNav() {
    const user = userHelper.getUserData();
    const userBtns = document.querySelector('.user');
    const guestBtns = document.querySelector('.guest');
    if (user) {
        userBtns.style.display = 'inline-block';
        guestBtns.style.display = 'none';
    } else {
        userBtns.style.display = 'none';
        guestBtns.style.display = 'inline-block';
    }
}

function goTo(path) {
    page.redirect(path);
}