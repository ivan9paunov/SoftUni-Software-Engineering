import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from './utility/userHelper.js';
import { showHomeView } from './views/home.js';
import { showDashboardView } from './views/dashboard.js';
import { showCreateView } from './views/create.js';
import { showLoginView } from './views/login.js';
import { showRegisterView } from './views/register.js';
import { clearViews } from './views/clearViewsHelper.js';
import { onLogout } from './views/logout.js';
import { showDetailsView } from './views/details.js';

clearViews();

const root = document.querySelector('main');

page(updateContext);
page('/', showHomeView);
page('/dashboard', showDashboardView);
page('/details/:id', showDetailsView);
page('/create', showCreateView);
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
    const navBtns = Array.from(document.querySelector('ul.navbar-nav').children); 
    if (user) {
        navBtns[0].style.display = 'inline-block';
        navBtns[1].style.display = 'inline-block';
        navBtns[2].style.display = 'inline-block';
        navBtns[3].style.display = 'none';
        navBtns[4].style.display = 'none';
    } else {
        navBtns[0].style.display = 'inline-block';
        navBtns[1].style.display = 'none';
        navBtns[2].style.display = 'none';
        navBtns[3].style.display = 'inline-block';
        navBtns[4].style.display = 'inline-block';
    }
}

function goTo(path) {
    page.redirect(path);
}