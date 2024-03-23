import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';

const loginTemplate = () => html`
    <section id="loginPage">
        <form @submit=${onLogin}>
            <fieldset>
                <legend>Login</legend>

                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email">

                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password">

                <button type="submit" class="login">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
`;

let ctx;
export function showLoginView(context) {
    ctx = context;
    ctx.render(loginTemplate());
}

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    if (!email || !password) {
        throw new Error(alert('All fields must be filled!'));
    }

    const userData = await userService.login({ email, password });
    userHelper.setUserData(userData);
    event.target.reset();
    ctx.updateNav();
    ctx.goTo('/');
}
