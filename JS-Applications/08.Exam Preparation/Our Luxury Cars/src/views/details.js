import { html, render } from '../../node_modules/lit-html/lit-html.js'; 
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

function detailsTemplate(item) {
    const isOwner = userHelper.hasOwner(item._ownerId);

    return html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src=${item.imageUrl} alt="example1" />
                <p id="details-title">${item.model}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p class="price">Price: €${item.price}</p>
                        <p class="weight">Weight: ${item.weight} kg</p>
                        <p class="top-speed">Top Speed: ${item.speed} kph</p>
                        <p id="car-description">${item.about}</p>
                    </div>

                    <!--Edit and Delete are only for creator-->
                    ${isOwner ? html`
                        <div id="action-buttons">
                            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                            <a @click=${onDelete} href="" id="delete-btn">Delete</a>
                        </div>` : ''}
                </div>
            </div>
        </section>
    `;
}

let context = null;
export async function showDetailsView(ctx) {
    context = ctx;
    const itemId = ctx.params.id;
    const data = await dataService.getItemDetails(itemId);
    ctx.render(detailsTemplate(data));
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