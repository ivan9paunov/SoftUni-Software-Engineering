import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

// Add @submit=${onAdd} to your form

const addTemplate = () => html`
    <section id="create">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Add Character</h2>
            <form @submit=${onAdd} class="create-form">
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Character Type"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
              id="description"
              name="description"
              placeholder="Description"
              rows="2"
              cols="10"
            ></textarea>
            <textarea
              id="additional-info"
              name="additional-info"
              placeholder="Additional Info"
              rows="2"
              cols="10"
            ></textarea>
              <button type="submit">Add Character</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
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
    const { category, description } = Object.fromEntries(formData);
    const imageUrl = formData.get('image-url');
    const moreInfo = formData.get('additional-info');

    if (!category || !description || !imageUrl || !moreInfo) {
        throw new Error(alert('All fields must be filled!'));
    }

    await dataService.createItem({ category, imageUrl, description, moreInfo });
    event.target.reset();
    ctx.goTo('/catalog');
}