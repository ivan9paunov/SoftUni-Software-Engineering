import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

// Add @submit=${onAdd} to your form

const addTemplate = () => html`
    <section id="create">
        <div class="form">
            <h2>Add Album</h2>
            <form @submit=${onAdd} class="create-form">
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
                <input type="text" name="album" id="album-album" placeholder="Album" />
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
                <input type="text" name="release" id="album-release" placeholder="Release date" />
                <input type="text" name="label" id="album-label" placeholder="Label" />
                <input type="text" name="sales" id="album-sales" placeholder="Sales" />

                <button type="submit">post</button>
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
    const { singer, album, imageUrl, release, label, sales } = Object.fromEntries(formData);

    if (!singer || !album || !imageUrl || !release || !label || !sales) {
        throw new Error(alert('All fields must be filled!'));
    }

    await dataService.createItem({ singer, album, imageUrl, release, label, sales });
    event.target.reset();
    ctx.goTo('/catalog');
}