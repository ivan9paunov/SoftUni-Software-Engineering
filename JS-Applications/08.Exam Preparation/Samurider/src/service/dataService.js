import { del, get, post, put } from '../utility/requester.js';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    create: '/motorcycles',
    allMotorcycles: '/motorcycles?sortBy=_createdOn%20desc',
    myMotor: (id) => `/motorcycles/${id}`,
    search: (model) => `/motorcycles?where=model%20LIKE%20%22${model}%22`
};

async function createMotor(data) {
    return await post(BASE_URL + endpoints.create, data);
}

async function getAllMotorcycles() {
    return await get(BASE_URL + endpoints.allMotorcycles);
}

async function getMotorDetails(id) {
    return await get(BASE_URL + endpoints.myMotor(id));
}

async function editMotor(id, data) {
    return await put(BASE_URL + endpoints.myMotor(id), data);
}

async function deleteMotor(id) {
    return await del(BASE_URL + endpoints.myMotor(id));
}

async function searchMotor(model) {
    return await get(BASE_URL + endpoints.search(model));
}

export const dataService = {
    createMotor,
    getAllMotorcycles,
    getMotorDetails,
    editMotor,
    deleteMotor,
    searchMotor
};