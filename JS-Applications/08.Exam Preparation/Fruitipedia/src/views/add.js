import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

// Add @submit=${onAdd} to your form

const addTemplate = () => html`
    <section id="create">
      <div class="form">
        <h2>Add Fruit</h2>
        <form @submit=${onAdd} class="create-form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Fruit Name"
          />
          <input
            type="text"
            name="imageUrl"
            id="Fruit-image"
            placeholder="Fruit Image"
          />
          <textarea
            id="fruit-description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
          ></textarea>
          <textarea
            id="fruit-nutrition"
            name="nutrition"
            placeholder="Nutrition"
            rows="10"
            cols="50"
          ></textarea>
          <button type="submit">Add Fruit</button>
        </form>
      </div>
    </section>
`;

let ctx = null;
export function showAddView(context) {
    ctx = context;
    ctx.render(addTemplate());
}

async function onAdd(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    //Update formData values to the ones from your task
    const { name, imageUrl, description, nutrition } = Object.fromEntries(formData);

    if (!name || !imageUrl || !description || !nutrition) {
        throw new Error(alert('All fields must be filled!'));
    }

    await dataService.createItem({ name, imageUrl, description, nutrition });
    event.target.reset();
    ctx.goTo('/catalog');
}