import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';
import page from '../../node_modules/page/page.mjs';

const searchTemplate = (data, query, onSearch) => html`
    <section id="search">
        <div class="form">
            <h2>Search</h2>
            <form @submit=${onSearch} class="search-form">
                <input
                    type="text"
                    name="search"
                    id="search-input"
                    .value = ${query ? query : ''}
                />
                <button class="button-list">Search</button>
            </form>
        </div>
        <h4>Results:</h4>
        <div class="search-result">
            ${data ?
                data.length > 0 ?
                    data.map(item => html`
                        <div class="fruit">
                            <img src=${item.imageUrl} alt="example1" />
                            <h3 class="title">${item.name}</h3>
                            <p class="description">${item.description}</p>
                            <a class="details-btn" href="/details/${item._id}">More Info</a>
                        </div>`)
                : html`<p class="no-result">No result.</p>`
            : ''}
        </div>
    </section>
`;

export async function showSearchView(ctx) {
    const query = userHelper.parseQuery(ctx.querystring);
    const results = await dataService.doTheSearch(query.search);

    ctx.render(searchTemplate(results, query.search, createSubmitHandler(onSearch)));
}

function onSearch({ search }) {
    if (!search) {
        page.redirect('/search');
    } else {
        page.redirect(`/search/?search=${search}`);
    }
}

function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        callback(Object.fromEntries(data));
    };
}