import { del, get, post, put } from '../utility/requester.js';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    create: '/offers',
    allItems: '/offers?sortBy=_createdOn%20desc',
    myItem: (id) => `/offers/${id}`,
    // Adapt next ones to your BONUS task
    doAction: '/applications',
    alreadyInAction: (eventId, userId) => `/applications?where=offerId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    counter: (eventId) => `/applications?where=offerId%3D%22${eventId}%22&distinct=_ownerId&count`
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
async function doTheAction(data) {
    return await post(BASE_URL + endpoints.doAction, data);
}

async function alreadyDidTheAction(eventId, userId) {
    return await get(BASE_URL + endpoints.alreadyInAction(eventId, userId));
}

async function actionCounter(id) {
    return await get(BASE_URL + endpoints.counter(id));
}

export const dataService = {
    createItem,
    getAllItems,
    getItemDetails,
    editItem,
    deleteItem,
    // Adapt next ones to your BONUS task
    doTheAction,
    alreadyDidTheAction,
    actionCounter
};