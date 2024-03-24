import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

// Add @submit=${onEdit} to your form
// Load value to the form
// Adapt form values from your task in onEdit function

const editTemplate = (data) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Album</h2>
            <form @submit=${onEdit} class="edit-form">
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value="${data.singer}" />
                <input type="text" name="album" id="album-album" placeholder="Album" value="${data.album}" />
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value="${data.imageUrl}" />
                <input type="text" name="release" id="album-release" placeholder="Release date" value="${data.release}" />
                <input type="text" name="label" id="album-label" placeholder="Label" value="${data.label}" />
                <input type="text" name="sales" id="album-sales" placeholder="Sales" value="${data.sales}" />

                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

let ctx = null;
export async function showEditView(context) {
    ctx = context;
    const eventId = ctx.params.id;
    const data = await dataService.getItemDetails(eventId);
    ctx.render(editTemplate(data));
}

async function onEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { singer, album, imageUrl, release, label, sales } = Object.fromEntries(formData);

    if (!singer || !album || !imageUrl || !release || !label || !sales) {
        throw new Error(alert('All fields must be filled!'));
    }

    const eventId = ctx.params.id;
    await dataService.editItem(eventId, { singer, album, imageUrl, release, label, sales });
    event.target.reset();
    ctx.goTo(`/details/${eventId}`);
}