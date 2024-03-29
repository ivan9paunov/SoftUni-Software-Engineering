import { del, get, post, put } from '../utility/requester.js';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    create: '/fruits',
    allItems: '/fruits?sortBy=_createdOn%20desc',
    myItem: (id) => `/fruits/${id}`,
    // Adapt next ones to your BONUS task
    search: (query) => `/fruits?where=name%20LIKE%20%22${query}%22`
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
async function doTheSearch(query) {
    if (query) {
        return await get(BASE_URL + endpoints.search(query));
    } else {
        return undefined;
    }
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