import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';

const registerTemplate = () => html`
    <div class="container home wrapper  my-md-5 pl-md-5">
        <div class="row-form d-md-flex flex-mb-equal ">
            <div class="col-md-4">
                <img class="responsive" src="./images/idea.png" alt="">
            </div>
            <form @submit=${onRegister} class="form-user col-md-7" action="" method="">
                <div class="text-center mb-4">
                    <h1 class="h3 mb-3 font-weight-normal">Register</h1>
                </div>
                <div class="form-label-group">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" class="form-control" placeholder="Email" required=""
                        autofocus="">
                </div>
                <div class="form-label-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" class="form-control" placeholder="Password"
                        required="">
                </div>
                <div class="form-label-group">
                    <label for="inputRepeatPassword">Repeat Password</label>
                    <input type="password" id="inputRepeatPassword" name="repeatPassword" class="form-control"
                        placeholder="Repeat Password" required="">
                </div>
                <button class="btn btn-lg btn-dark btn-block" type="submit">Sign Up</button>
                <div class="text-center mb-4">
                    <p class="alreadyUser"> Don't have account? Then just
                        <a href="/login">Sign-In</a>!
                    </p>
                </div>
                <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2019.</p>
            </form>
        </div>
    </div>
`;

let context = null;
export function showRegisterView(ctx) {
    context = ctx;
    ctx.render(registerTemplate());
}

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password, repeatPassword } = Object.fromEntries(formData);

    if (email.length < 3) {
        throw new Error(alert('Your email must be at least 3 characters long!'));
    }
    
    if (password.length < 3) {
        throw new Error(alert('Your password must be at least 3 characters long!'));
    }

    if (password != repeatPassword) {
        throw new Error(alert('Passwords does not match!'));
    }

    const userData = await userService.register({ email, password });
    userHelper.setUserData(userData);
    context.updateNav();
    context.goTo('/');
}