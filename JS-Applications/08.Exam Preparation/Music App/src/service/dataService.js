import { del, get, post, put } from '../utility/requester.js';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    create: '/albums',
    allAlbums: '/albums?sortBy=_createdOn%20desc&distinct=name',
    myAlbum: (id) => `/albums/${id}`,
    search: (query) => `/albums?where=name%20LIKE%20%22${query}%22`
};

async function createAlbum(data) {
    return await post(BASE_URL + endpoints.create, data);
}

async function getAllAlbums() {
    return await get(BASE_URL + endpoints.allAlbums);
}

async function getAlbumDetails(id) {
    return await get(BASE_URL + endpoints.myAlbum(id));
}

async function editAlbum(id, data) {
    return await put(BASE_URL + endpoints.myAlbum(id), data);
}

async function deleteAlbum(id) {
    return await del(BASE_URL + endpoints.myAlbum(id));
}

async function searchAlbum(model) {
    return await get(BASE_URL + endpoints.search(model));
}

export const dataService = {
    createAlbum,
    getAllAlbums,
    getAlbumDetails,
    editAlbum,
    deleteAlbum,
    searchAlbum
};