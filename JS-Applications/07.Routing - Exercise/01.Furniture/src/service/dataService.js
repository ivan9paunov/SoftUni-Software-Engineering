import { del, get, post, put } from '../utility/requester.js';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    furniture: '/catalog',
    myFurniture: (userId) => `/catalog?where=_ownerId%3D%22${userId}%22`
};

async function createFurniture(data) {
    return await post(BASE_URL + endpoints.furniture, data);
}

async function getAllFurniture() {
    return await get(BASE_URL + endpoints.furniture);
}

async function getFurnitureDetails(id) {
    return await get(BASE_URL + endpoints.furniture + `/${id}`);
}

async function updateFurniture(id, data) {
    return await put(BASE_URL + endpoints.furniture + `/${id}`, data);
}

async function deleteFurniture(id) {
    return await del(BASE_URL + endpoints.furniture + `/${id}`);
}

async function getMyFurniture(userId) {
    return await get(BASE_URL + endpoints.myFurniture(userId));
}

export const dataService = {
    createFurniture,
    getAllFurniture,
    getFurnitureDetails,
    updateFurniture,
    deleteFurniture,
    getMyFurniture
};