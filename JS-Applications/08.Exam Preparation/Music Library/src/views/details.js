import { html, render } from '../../node_modules/lit-html/lit-html.js'; 
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

function detailsTemplate(item, alreadyDid, counts) {
    const hasUser = userHelper.getUserData();
    const isOwner = userHelper.hasOwner(item._ownerId);

    return html`
        <section id="details">
            <div id="details-wrapper">
                <p id="details-title">Album Details</p>
                <div id="img-wrapper">
                    <img src=${item.imageUrl} alt="example1" />
                </div>
                <div id="info-wrapper">
                    <p><strong>Band:</strong><span id="details-singer">${item.singer}</span></p>
                    <p><strong>Album name:</strong><span id="details-album">${item.album}</span></p>
                    <p><strong>Release date:</strong><span id="details-release">${item.release}</span></p>
                    <p><strong>Label:</strong><span id="details-label">${item.label}</span></p>
                    <p><strong>Sales:</strong><span id="details-sales">${item.sales}</span></p>
                </div>
                <div id="likes">Likes: <span id="likes-count">${counts}</span></div>
        
                <!--Edit and Delete are only for creator-->
                ${isOwner ? html`
                    <div id="action-buttons">
                        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="" id="delete-btn">Delete</a>
                    </div>` : ''}
                
                <!--Bonus - Only for logged-in users ( not authors )-->
                ${!isOwner && hasUser && !alreadyDid ? html`
                    <div id="action-buttons">
                        <a @click=${onAction} href="" id="like-btn">Like</a>
                    </div>` : ''}
            </div>
        </section>
    `;
}

let context = null;
export async function showDetailsView(ctx) {
    context = ctx;
    const userId = userHelper.getUserId();
    const itemId = ctx.params.id;
    const data = await dataService.getItemDetails(itemId);
    const alreadyDid = await dataService.alreadyDidTheAction(itemId, userId);
    const actionsCount = await dataService.actionCounter(itemId);
    ctx.render(detailsTemplate(data, alreadyDid, actionsCount));
}

async function onDelete(event) {
    event.preventDefault();

    const eventId = context.params.id;
    await dataService.deleteItem(eventId);
    context.goTo('/catalog');
}

async function onAction(event) {
    event.preventDefault;

    const eventId = context.params.id;
    await dataService.doTheAction({ eventId });
    const actionsCount = await dataService.actionCounter(eventId);
    const root = document.getElementById('likes-count'); //Update the root ID
    render(actionsCount, root);
}