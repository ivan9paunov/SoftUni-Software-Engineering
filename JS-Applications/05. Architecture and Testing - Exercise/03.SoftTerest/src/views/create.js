import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const createTemplate = () => html`
    <div class="container home wrapper  my-md-5 pl-md-5">
        <div class=" d-md-flex flex-mb-equal ">
            <div class="col-md-6">
                <img class="responsive-ideas create" src="/images/creativity_painted_face.jpg" alt="">
            </div>
            <form @submit=${onCreate} class="form-idea col-md-5" action="#/create" method="post">
                <div class="text-center mb-4">
                    <h1 class="h3 mb-3 font-weight-normal">Share Your Idea</h1>
                </div>
                <div class="form-label-group">
                    <label for="ideaTitle">Title</label>
                    <input type="text" id="ideaTitle" name="title" class="form-control"
                        placeholder="What is your idea?" required="" autofocus="">
                </div>
                <div class="form-label-group">
                    <label for="ideaDescription">Description</label>
                    <textarea type="text" name="description" class="form-control" placeholder="Description"
                        required=""></textarea>
                </div>
                <div class="form-label-group">
                    <label for="inputURL">Add Image</label>
                    <input type="text" id="inputURL" name="imageURL" class="form-control" placeholder="Image URL"
                        required="">

                </div>
                <button class="btn btn-lg btn-dark btn-block" type="submit">Create</button>

                <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2021.</p>
            </form>
        </div>
    </div>
`;

let context = null;
export function showCreateView(ctx) {
    const userData = userHelper.getUserData();
    if (!userData) {
        ctx.goTo('/login');
    }

    context = ctx;
    ctx.render(createTemplate());

    const navBtns = Array.from(document.querySelector('ul.navbar-nav').children);
    navBtns.forEach(div => {
        if (div.className.includes('active')) {
            div.classList.remove('active');
        }
    });
    navBtns[1].classList.add('active');
}

async function onCreate(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let { title, description, imageURL } = Object.fromEntries(formData);
    const img = imageURL;

    if (title.length < 6) {
        throw new Error(alert('The title must be at least 6 characters long!'));
    }
    
    if (description.length < 10) {
        throw new Error(alert('The description must be at least 10 characters long!'));
    }
    
    if (img.length < 5) {
        throw new Error(alert('The image URL must be at least 5 characters long!'));
    }

    await dataService.createIdea({ title, description, img });
    event.target.reset();
    context.goTo('/dashboard');
}