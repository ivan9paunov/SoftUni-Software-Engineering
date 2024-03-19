import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const editTemplate = (item, errors) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control ${!!errors ? errors.make ? 'is-invalid' : 'is-valid' : ''}" id="new-make" type="text" name="make" value="${item.make}">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control ${!!errors ? errors.model ? 'is-invalid' : 'is-valid' : ''}" id="new-model" type="text" name="model" value="${item.model}">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control ${!!errors ? errors.year ? 'is-invalid' : 'is-valid' : ''}" id="new-year" type="number" name="year" value="${item.year}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control ${!!errors ? errors.description ? 'is-invalid' : 'is-valid' : ''}" id="new-description" type="text" name="description" value="${item.description}">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control ${!!errors ? errors.price ? 'is-invalid' : 'is-valid' : ''}" id="new-price" type="number" name="price" value="${item.price}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control ${!!errors ? errors.img ? 'is-invalid' : 'is-valid' : ''}" id="new-image" type="text" name="img" value="${item.img}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material" value="${item.material}">
                </div>
                <input type="submit" class="btn btn-info" value="Edit" />
            </div>
        </div>
    </form>
`;

let context = null;
let id = null;

export async function showEditView(ctx) {
    context = ctx;
    id = context.params.id;
    const item = await dataService.getFurnitureDetails(id);
    context.render(editTemplate(item));
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let { make, model, year, description, price, img, material } = Object.fromEntries(formData);
    year = Number(year);

    let errors = {};
    let hasError = false;

    if (make.length < 4) {
        errors.make = true;
        hasError = true;
    };

    if (model.length < 4) {
        errors.model = true;
        hasError = true;
    };

    if (year < 1950 || year > 2050) {
        errors.year = true;
        hasError = true;
    };

    if (description.length <= 10) {
        errors.description = true;
        hasError = true;
    };
    
    if (!price || Number(price) < 0) {
        errors.price = true;
        hasError = true;
    };
    price = Number(price);

    if (!img) {
        errors.img = true;
        hasError = true;
    };

    const item  = { make, model, year, description, price, img, material };

    if (hasError) {
        return context.render(editTemplate(item, errors));
    }

    await dataService.updateFurniture(id, item);
    context.goTo(`/details/${id}`);
}
