import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const editTemplate = (item) => html`
    <section id="edit">
        <h2>Edit Motorcycle</h2>
        <div class="form">
            <h2>Edit Motorcycle</h2>
            <form @submit=${onSubmit} class="edit-form">
                <input
                    type="text"
                    name="model"
                    id="model"
                    placeholder="Model"
                    value=${item.model}
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="moto-image"
                    placeholder="Moto Image"
                    value=${item.imageUrl}
                />
                <input
                    type="number"
                    name="year"
                    id="year"
                    placeholder="Year"
                    value=${item.year}
                />
                <input
                    type="number"
                    name="mileage"
                    id="mileage"
                    placeholder="mileage"
                    value=${item.mileage}
                />
                <input
                    type="number"
                    name="contact"
                    id="contact"
                    placeholder="contact"
                    value=${item.contact}
                />
                <textarea
                    id="about"
                    name="about"
                    placeholder="about"
                    rows="10"
                    cols="50"
                >${item.about}</textarea>
                <button type="submit">Edit Motorcycle</button>
            </form>
        </div>
    </section>
`;

let context = null;
export async function showEditView(ctx) {
    context = ctx;
    const itemId = ctx.params.id;
    const data = await dataService.getMotorDetails(itemId);
    ctx.render(editTemplate(data));
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { model, imageUrl, year, mileage, contact, about } = Object.fromEntries(formData);

    if (!model || !imageUrl || !year || !mileage || !contact || !about) {
        throw new Error(alert('All fields must be filled!'));
    }

    const motorId = context.params.id;
    await dataService.editMotor(motorId, { model, imageUrl, year, mileage, contact, about });
    context.goTo(`/details/${motorId}`);
}
