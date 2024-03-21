import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

function detailsTemplate(item) {
    const isOwner = userHelper.hasOwner(item._ownerId);
    
    return html`
        <div class="container home some">
            <!-- <img class="det-img" src=${'/' + item.img.split('./')[1]} /> -->
            <img class="det-img" src=${item.img} />
            <div class="desc">
                <h2 class="display-5">${item.title}</h2>
                <p class="infoType">Description:</p>
                <p class="idea-description">${item.description}</p>
            </div>
            ${isOwner ? html`
                    <div class="text-center">
                        <a @click=${onDelete} data-id="${item._id}" class="btn detb" href="">Delete</a>
                    </div>}` :
                    html`<div class="text-center"></div>}`
            }
        </div>
    `;
}

let context = null;
export async function showDetailsView(ctx) {
    context = ctx;
    const ideaId = ctx.params.id;
    const item = await dataService.getIdeaDetails(ideaId);
    ctx.render(detailsTemplate(item));
}

async function onDelete(event) {
    event.preventDefault();
    const ideaId = event.target.dataset.id;
    await dataService.deleteIdea(ideaId);
    await context.goTo('/dashboard');
}