import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const searchTemplate = () => html`
    <section id="search">
        <div class="form">
            <h4>Search</h4>
            <form @submit=${onSearch} class="search-form">
                <input type="text" name="search" id="search-input" />
                <button class="button-list">Search</button>
            </form>
        </div>
        <div class="search-result">
            <h2 class="no-avaliable">No result.</h2>
        </div>
    </section>
`;

export function showSearchView(ctx) {
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
    <!--If there are matches display a div with information about every result-->
    <div class="car">
        <img src=${data.imageUrl} alt="example1"/>
        <h3 class="model">${data.model}</h3>
        <a class="details-btn" href="/details/${data._id}">More Info</a>
    </div>
`;

const noResults = () => html`<h2 class="no-avaliable">No result.</h2>`;