import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

function detailsTemplate(data) {
    const isOwner = userHelper.hasOwner(data._ownerId);

    return html`
        <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src=${data.imgUrl} >
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${data.name}</h1>
                        <h3>Artist: ${data.artist}</h3>
                        <h4>Genre: ${data.genre}</h4>
                        <h4>Price: $${data.price}</h4>
                        <h4>Date: ${data.releaseDate}</h4>
                        <p>Description: ${data.description}</p>
                    </div>

                    <!-- Only for registered user and creator of the album-->
                    ${isOwner ? html`
                        <div class="actionBtn">
                            <a href="/edit/${data._id}" class="edit">Edit</a>
                            <a @click=${onRemove} href="#" class="remove">Delete</a>
                        </div>` : ''}
                </div>
            </div>
        </section>`;
}

let ctx;
export async function showDetailsView(context) {
    ctx = context;
    const albumId = ctx.params.id;
    const data = await dataService.getAlbumDetails(albumId);
    ctx.render(detailsTemplate(data));
}
  
async function onRemove(event) {
    event.preventDefault();

    const albumId = ctx.params.id;
    await dataService.deleteAlbum(albumId);
    ctx.goTo('/catalog');
}