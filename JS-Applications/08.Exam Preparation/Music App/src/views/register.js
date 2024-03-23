import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';

const registerTemplate = () => html`
    <section id="registerPage">
        <form @submit=${onRegister}>
            <fieldset>
                <legend>Register</legend>

                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email">

                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password">

                <label for="conf-pass" class="vhide">Confirm Password:</label>
                <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                <button type="submit" class="register">Register</button>

                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
`;

let ctx;
export function showRegisterView(context) {
    ctx = context;
    ctx.render(registerTemplate());
}

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);
    const rePass = formData.get('conf-pass');

    if (!email || !password || !rePass) {
        throw new Error(alert('All fields must be filled!'));
    }

    if (password != rePass) {
        throw new Error(alert('Passwords does not match!'));
    }

    const userData = await userService.register({ email, password });
    userHelper.setUserData(userData);
    event.target.reset();
    ctx.updateNav();
    ctx.goTo('/');
}