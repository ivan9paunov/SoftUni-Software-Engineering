export async function showCatalog(ctx) {
    const query = parseQuery(ctx.querystring);

    const recipes = await getRecipes(query.string);

    render(catalogTemplate(recipes, createSubmitHandler(onSearch)));
}

function onSearch({ search }) {
    if (!search) {
        page.redirect('/');
    } else {
        page.redirect(`?search=${search}`);
    }
}