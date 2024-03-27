import { del, get, post, put } from '../utility/requester.js';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    create: '/cars',
    allItems: '/cars?sortBy=_createdOn%20desc',
    myItem: (id) => `/cars/${id}`,
    // Adapt next ones to your BONUS task
    search: (query) => `/cars?where=model%20LIKE%20%22${query}%22`
};

async function createItem(data) {
    return await post(BASE_URL + endpoints.create, data);
}

async function getAllItems() {
    return await get(BASE_URL + endpoints.allItems);
}

async function getItemDetails(id) {
    return await get(BASE_URL + endpoints.myItem(id));
}

async function editItem(id, data) {
    return await put(BASE_URL + endpoints.myItem(id), data);
}

async function deleteItem(id) {
    return await del(BASE_URL + endpoints.myItem(id));
}


// Adapt next ones to your BONUS task
async function doTheSearch(id) {
    return await get(BASE_URL + endpoints.search(id));
}

export const dataService = {
    createItem,
    getAllItems,
    getItemDetails,
    editItem,
    deleteItem,
    // Adapt next ones to your BONUS task
    doTheSearch
};