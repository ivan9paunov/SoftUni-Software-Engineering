import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

function detailsTemplate(data) {
    const isOwner = userHelper.hasOwner(data._ownerId);

    return html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-title">${data.model}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p class="year">Year: ${data.year}</p>
                    <p class="mileage">Mileage: ${data.mileage} km.</p>
                    <p class="contact">Contact Number: ${data.contact}</p>
                    <p id = "motorcycle-description">${data.about}</p>
                </div>
                <!--Edit and Delete are only for creator-->
                ${isOwner ? html`
                    <div id="action-buttons">
                        <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="" id="delete-btn">Delete</a>
                    </div>` : ''
                }
            </div>
        </div>
    </section>
    `;

} 

let context = null;
export async function showDetailsView(ctx) {
    context = ctx;
    const motorId = ctx.params.id;
    const data = await dataService.getMotorDetails(motorId);
    ctx.render(detailsTemplate(data));
}

async function onDelete(event) {
    event.preventDefault();

    const confirmation = confirm('Are you sure you want to delete your motor?');

    if (confirmation) {
        const motorId = context.params.id;
        await dataService.deleteMotor(motorId);
        context.goTo('/motorcycles');
    }
}