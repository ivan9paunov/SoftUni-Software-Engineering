import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const addTemplate = () => html`
  <section id="create">
    <div class="form form-item">
      <h2>Share Your item</h2>
      <form @submit=${onAdd} class="create-form">
        <input type="text" name="item" id="item" placeholder="Item" />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type"
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
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
  const { item, imageUrl, price, availability, type, description } = Object.fromEntries(formData);

  if (!item || !imageUrl || !price || !availability || !type || !description) {
    userHelper.notification('All fields must be filled!');
    return;
  }

  await dataService.createItem({ item, imageUrl, price, availability, type, description });
  event.target.reset();
  ctx.goTo('/catalog');
}