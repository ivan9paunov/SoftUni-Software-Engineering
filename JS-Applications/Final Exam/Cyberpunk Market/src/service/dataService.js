import { del, get, post, put } from '../utility/requester.js';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    create: '/cyberpunk',
    allItems: '/cyberpunk?sortBy=_createdOn%20desc',
    myItem: (id) => `/cyberpunk/${id}`,
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

export const dataService = {
    createItem,
    getAllItems,
    getItemDetails,
    editItem,
    deleteItem
};