import { html, render } from '../../node_modules/lit-html/lit-html.js'; 
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

function detailsTemplate(item, alreadyDid, counts) {
    const hasUser = userHelper.getUserData();
    const isOwner = userHelper.hasOwner(item._ownerId);

    return html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-category">${item.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${item.description}</p>
                   <p id ="more-info">${item.moreInfo}</p>
              </div>

              <h3>Likes:<span id="likes">${counts}</span></h3>
        
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
    const confirmation = confirm('Are you sure you want to delete the item?');

    if (confirmation) {
        await dataService.deleteItem(eventId);
        context.goTo('/catalog');
    }
}

async function onAction(event) {
    event.preventDefault;
    
    const eventId = context.params.id;
    await dataService.doTheAction({ factId: eventId }); //Adapt the body name
    const actionsCount = await dataService.actionCounter(eventId);
    const root = document.getElementById('likes'); //Update the root ID
    render(actionsCount, root);
}