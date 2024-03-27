import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

// Add @submit=${onAdd} to your form

const addTemplate = () => html`
    <section id="create">
      <div class="form form-auto">
        <h2>Share Your Car</h2>
        <form @submit=${onAdd} class="create-form">
          <input type="text" name="model" id="model" placeholder="Model"/>
          <input
            type="text"
            name="imageUrl"
            id="car-image"
            placeholder="Your Car Image URL"
          />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price in Euro"
          />
          <input
            type="number"
            name="weight"
            id="weight"
            placeholder="Weight in Kg"
          />
          <input
            type="text"
            name="speed"
            id="speed"
            placeholder="Top Speed in Kmh"
          />
          <textarea
            id="about"
            name="about"
            placeholder="More About The Car"
            rows="10"
            cols="50"
          ></textarea>
          <button type="submit">Add</button>
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
    const { model, imageUrl, price, weight, speed, about } = Object.fromEntries(formData);

    if (!model || !imageUrl || !price || !weight || !speed || !about) {
        throw new Error(alert('All fields must be filled!'));
    }

    await dataService.createItem({ model, imageUrl, price, weight, speed, about });
    event.target.reset();
    ctx.goTo('/catalog');
}