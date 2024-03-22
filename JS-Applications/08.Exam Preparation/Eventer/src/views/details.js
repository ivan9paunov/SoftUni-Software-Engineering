import { html, render } from '../../node_modules/lit-html/lit-html.js'; 
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

function detailsTemplate(item, alreadyGo, going) {
    const hasUser = userHelper.getUserData();
    const isOwner = userHelper.hasOwner(item._ownerId);

    return html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src=${item.imageUrl} alt="example1" />
                <p id="details-title">${item.name}</p>
                <p id="details-category">
                    Category: <span id="categories">${item.category}</span>
                </p>
                <p id="details-date">
                    Date:<span id="date">${item.date}</span></p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <span>${item.description}</span>
                    </div>

                </div>

                <h3>Going: <span id="go">${going}</span> times.</h3>

                <!--Edit and Delete are only for creator-->
                ${isOwner ? html`
                    <div id="action-buttons">
                        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="" id="delete-btn">Delete</a>
                    </div>` : ''}
                
                <!--Bonus - Only for logged-in users ( not authors )-->
                ${!isOwner && hasUser && !alreadyGo ? html`
                    <div id="action-buttons">
                        <a @click=${onGoing} href="" id="go-btn">Going</a>
                    </div>` : ''}
            </div>
        </section>
    `;
}

let context = null;
export async function showDetailsView(ctx) {
    context = ctx;
    const userId = userHelper.getUserId();
    const eventId = ctx.params.id;
    const data = await dataService.getEventDetails(eventId);
    const alreadyGo = await dataService.hasGoing(eventId, userId);
    const going = await dataService.goingToEvent(eventId);
    ctx.render(detailsTemplate(data, alreadyGo, going));
}

async function onDelete(event) {
    event.preventDefault();

    const eventId = context.params.id;
    await dataService.deleteEvent(eventId);
    context.goTo('/events');
}

async function onGoing(event) {
    event.preventDefault;

    const eventId = context.params.id;
    await dataService.goToEvent({ eventId });
    const going = await dataService.goingToEvent(eventId);
    const root = document.getElementById('go');
    render(going, root);
}