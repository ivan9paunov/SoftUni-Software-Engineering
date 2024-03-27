import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';

const registerTemplate = () => html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form @submit=${onRegister} class="register-form">
                <input
                    type="text"
                    name="email"
                    id="register-email"
                    placeholder="email"
                />
                <input
                    type="password"
                    name="password"
                    id="register-password"
                    placeholder="password"
                />
                <input
                    type="password"
                    name="re-password"
                    id="repeat-password"
                    placeholder="repeat password"
                />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>
`;


let ctx = null;
export function showRegisterView(context) {
    ctx = context;
    ctx.render(registerTemplate());
}

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);
    const rePass = formData.get('re-password');

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