import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const searchTemplate = () => html`
    <section id="searchPage">
        <h1>Search by Name</h1>

        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button @click=${onSearch} class="button-list">Search</button>
        </div>

        <h2>Results:</h2>

        <!--Show after click Search button-->
        <div class="search-result">
            
        </div>
    </section>
`;

export function showSearchView(ctx) {
    ctx.render(searchTemplate());
}

async function onSearch(event) {
    event.preventDefault();

    const searchInputRef = document.getElementById('search-input');
    const searchVal = searchInputRef.value;

    if (!searchVal) {
        throw new Error(alert('Give search criteria!'));
    }

    const data = await dataService.searchAlbum(searchVal);
    const root = document.querySelector('.search-result');

    if (data.length) {
        render(data.map(results), root);
    } else {
        render(noResults(), root);
    }
}

function results(data) {
    const isUser = userHelper.getUserData();

    return html`
        <!--If have matches-->
        <div class="card-box">
            <img src=${data.imgUrl} >
            <div>
                <div class="text-center">
                    <p class="name">Name: ${data.name}</p>
                    <p class="artist">Artist: ${data.artist}</p>
                    <p class="genre">Genre: ${data.genre}</p>
                    <p class="price">Price: $${data.price}</p>
                    <p class="date">Release Date: ${data.releaseDate}</p>
                </div>
                ${isUser ? html`
                    <div class="btn-group">
                        <a href="/catalog/${data._id}" id="details">Details</a>
                    </div>` : ''}
            </div>
        </div>
    `;
}

function noResults() {
    return html`
        <!--If there are no matches-->
        <p class="no-result">No result.</p>
    `;
}