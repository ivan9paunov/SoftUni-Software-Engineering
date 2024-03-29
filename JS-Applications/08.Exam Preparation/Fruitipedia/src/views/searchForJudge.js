import { html, render } from 'lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const searchTemplate = () => html`
    <section id="search">
        <div class="form">
            <h2>Search</h2>
            <form @submit=${onSearch} class="search-form">
                <input
                    type="text"
                    name="search"
                    id="search-input"
                />
                <button class="button-list">Search</button>
            </form>
        </div>
        <h4>Results:</h4>
        <div class="search-result">

        </div>
    </section>
`;

let context;
export function showSearchView(ctx) {
    context = ctx;
    ctx.render(searchTemplate());
}

async function onSearch(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const searchQuery = formData.get('search');

    if (!searchQuery) {
        throw new Error(alert('Fill search criteria!'));
    }

    const data = await dataService.doTheSearch(searchQuery);
    const root = document.querySelector('.search-result');

    if (data.length == 0) {
        render(noResults(), root);
    } else {
        render(data.map(resultsTemplate), root);
    }

    event.target.reset();
}

const resultsTemplate = (data) => html`
    <!--If there are matches display a div with information about every fruit-->
    <div class="fruit">
        <img src=${data.imageUrl} alt="example1" />
        <h3 class="title">${data.name}</h3>
          <p class="description">${data.description}</p>
          <a class="details-btn" href="/details/${data._id}">More Info</a>
        </div>
`;

const noResults = () => html`<p class="no-result">No result.</p>`;