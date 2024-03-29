import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
// import { userHelper } from '../utility/userHelper.js';

// Change and add these for pagination
// function dashboardTemplate(items, page, pages) {
// ${paginator(page, pages)}

function dashboardTemplate(items) {
    if (items.length > 0) {
        return html`
            <h2>Fruits</h2>
            <section id="dashboard">
                ${items.map(cardTemplate)}
            </section>
        `;
    } else {
        return html`
            <h2>Fruits</h2>
            <section id="dashboard">
                <h2>No fruit info yet.</h2>
            </section>`;
    }
}

const cardTemplate = (item) => html`
    <div class="fruit">
        <img src=${item.imageUrl} alt="example1" />
        <h3 class="title">${item.name}</h3>
        <p class="description">${item.description}</p>
        <a class="details-btn" href="/details/${item._id}">More Info</a>
    </div>
`;


export async function showDashboardView(ctx) {
    const data = await dataService.getAllItems();
    ctx.render(dashboardTemplate(data));
    
    // Pagination: and comment the above^
    // const query = userHelper.parseQuery(ctx.querystring);
    // const pageSize = 3;
    // const pages = Math.ceil(await dataService.totalItems() / pageSize);
    // const page = Number(query.page) || 1;
    // const data = await dataService.pagination(page, pageSize);
    
    // ctx.render(dashboardTemplate(data, page, pages));
}


// Pagination:
// function paginator(page, pages) {
//     const pageLinks = (new Array(pages)).fill(0);

//     return html`
//        <div style="display: block">
//            ${page > 1 ? html`<a href="?page=${page - 1}">&lt;</a>` : null}
//            ${pageLinks.map((_, i) => pageIndex(i + 1, page))}
//            ${page < pages ? html`<a href="?page=${page + 1}">&gt;</a>` : null}
//        </div>
//    `;
// }

// const pageIndex = (index, page) => index == page 
// ? html`<span>${index}</span>`
// : html`<a href="?page=${index}">${index}</a>`;