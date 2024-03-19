import { dataService } from '../service/dataService.js';

export async function deleteItem(ctx) {
    const id = ctx.params.id;
    const confirmation = confirm('Do you want to delete this item?');
    
    if (confirmation) {
        await dataService.deleteFurniture(id);
        ctx.goTo('/');
    }
}