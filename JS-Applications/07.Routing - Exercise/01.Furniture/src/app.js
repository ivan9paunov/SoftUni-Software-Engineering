import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { showDashboardView } from './views/dashboardView.js';
import { showRegisterView } from './views/register.js';
import { userHelper } from './utility/userHelper.js';
import { onLogout } from './views/logout.js';
import { showLoginView } from './views/login.js';
import { showCreateView } from './views/createFurnitureView.js';
import { showDetailsView } from './views/details.js';
import { showMyFurniture } from './views/myFurnitureView.js';
import { deleteItem } from './views/delete.js';
import { showEditView } from './views/editView.js';

const root = document.querySelector('div[data-id="root"]');
const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

page(updateContext);
page('/', showDashboardView);
page('/dashboard', showDashboardView);
page('/create', showCreateView);
page('/details/:id', showDetailsView);
page('/edit/:id', showEditView);
page('/delete/:id', deleteItem);
page('/myFurniture', showMyFurniture);
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
    if (user) {
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
    }
}

function goTo(path) {
    page.redirect(path);
}