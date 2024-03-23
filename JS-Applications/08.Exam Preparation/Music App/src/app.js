import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from './utility/userHelper.js';
import { showHomeView } from './views/home.js';
import { showCatalogView } from './views/catalog.js';
import { showDetailsView } from './views/details.js';
import { showLoginView } from './views/login.js';
import { onLogout } from './views/logout.js';
import { showRegisterView } from './views/register.js';
import { showCreateView } from './views/create.js';
import { showEditView } from './views/edit.js';
import { showSearchView } from './views/search.js';

const root = document.querySelector('main');

page(updateContext);
page('/', showHomeView);
page('/catalog', showCatalogView);
page('/catalog/:id', showDetailsView);
page('/create', showCreateView);
page('/edit/:id', showEditView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', onLogout);
page('/search', showSearchView);

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
    const navBtns = Array.from(document.querySelector('nav > ul').children);

    if (user) {
        navBtns[2].style.display = 'none';
        navBtns[3].style.display = 'none';
        navBtns[4].style.display = 'inline-block';
        navBtns[5].style.display = 'inline-block';
    } else {
        navBtns[2].style.display = 'inline-block';
        navBtns[3].style.display = 'inline-block';
        navBtns[4].style.display = 'none';
        navBtns[5].style.display = 'none';
    }
}

function goTo(path) {
    page.redirect(path);
}