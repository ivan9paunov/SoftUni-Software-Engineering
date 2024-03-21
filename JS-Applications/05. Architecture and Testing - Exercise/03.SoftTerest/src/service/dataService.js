import { del, get, post } from '../utility/requester.js';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    create: '/ideas',
    allIdeas: '/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    myIdea: (id) => `/ideas/${id}`
};

async function createIdea(data) {
    return await post(BASE_URL + endpoints.create, data);
}

async function getAllIdeas() {
    return await get(BASE_URL + endpoints.allIdeas);
}

async function getIdeaDetails(id) {
    return await get(BASE_URL + endpoints.myIdea(id));
}

async function deleteIdea(id) {
    return await del(BASE_URL + endpoints.myIdea(id));
}

export const dataService = {
    createIdea,
    getAllIdeas,
    getIdeaDetails,
    deleteIdea
};