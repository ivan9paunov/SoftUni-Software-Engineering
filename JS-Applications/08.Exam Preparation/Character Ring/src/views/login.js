import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';

const loginTemplate = () => html`
    <section id="login">
        <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Login</h2>
            <form @submit=${onLogin} class="login-form">
                <input type="text" name="email" id="email" placeholder="email" />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                />
                <button type="submit">login</button>
                <p class="message">
                    Not registered? <a href="/register">Create an account</a>
                </p>
            </form>
            <img class="border" src="./images/border.png" alt="">
        </div>
    </section>
`;

let ctx = null;
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