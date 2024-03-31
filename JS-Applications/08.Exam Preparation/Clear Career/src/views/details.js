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
            <p id="details-title">${item.title}</p>
            <p id="details-category">
              Category: <span id="categories">${item.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${item.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${item.description}</span>
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${item.requirements}</span>
              </div>
            </div>
            <p>Applications: <strong id="applications">${counts}</strong></p>
        
                <!--Edit and Delete are only for creator-->
                ${isOwner ? html`
                    <div id="action-buttons">
                        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="" id="delete-btn">Delete</a>
                    </div>` : ''}
                
                <!--Bonus - Only for logged-in users ( not authors )-->
                ${!isOwner && hasUser && !alreadyDid ? html`
                    <div id="action-buttons">
                        <a @click=${onAction} href="" id="apply-btn">Apply</a>
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
    await dataService.doTheAction({ offerId: eventId }); //Adapt the body name
    const actionsCount = await dataService.actionCounter(eventId);
    const root = document.getElementById('applications'); //Update the root ID
    render(actionsCount, root);
}