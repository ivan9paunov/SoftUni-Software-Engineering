import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

function catalogTemplate(items) {
    if (items.length > 0) {
        return html`
            <section id="catalogPage">
                <h1>All Albums</h1>
                ${items.map(cardTemplate)}
            </section>
        `;
    } else {
        return html`
            <section id="catalogPage">
                <h1>All Albums</h1>
                <p>No Albums in Catalog!</p>
            </section>
        `;
    }
} 

function cardTemplate(item) {
    const isLogged = userHelper.getUserId();

    return html`
        <div class="card-box">
            <img src=${item.imgUrl} >
            <div>
                <div class="text-center">
                    <p class="name">Name: ${item.name}</p>
                    <p class="artist">Artist: ${item.artist}</p>
                    <p class="genre">Genre: ${item.genre}</p>
                    <p class="price">Price: $${item.price}</p>
                    <p class="date">Release Date: ${item.releaseDate}</p>
                </div>
                ${isLogged ? html`
                    <div class="btn-group">
                        <a href="/catalog/${item._id}" id="details">Details</a>
                    </div>` : ''}
            </div>
        </div>
    `;
}

export async function showCatalogView(ctx) {
    const data = await dataService.getAllAlbums();
    ctx.render(catalogTemplate(data));
}