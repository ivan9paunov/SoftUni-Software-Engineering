import { del, get, post, put } from '../utility/requester.js';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    create: '/events',
    allEvents: '/events?sortBy=_createdOn%20desc',
    myEvent: (id) => `/events/${id}`,
    goToEvent: '/going',
    hasGoing: (eventId, userId) => `/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    going: (eventId) => `/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`
};

async function createEvent(data) {
    return await post(BASE_URL + endpoints.create, data);
}

async function getAllEvents() {
    return await get(BASE_URL + endpoints.allEvents);
}

async function getEventDetails(id) {
    return await get(BASE_URL + endpoints.myEvent(id));
}

async function editEvent(id, data) {
    return await put(BASE_URL + endpoints.myEvent(id), data);
}

async function deleteEvent(id) {
    return await del(BASE_URL + endpoints.myEvent(id));
}

async function goToEvent(data) {
    return await post(BASE_URL + endpoints.goToEvent, data);
}

async function hasGoing(eventId, userId) {
    return await get(BASE_URL + endpoints.hasGoing(eventId, userId));
}

async function goingToEvent(id) {
    return await get(BASE_URL + endpoints.going(id));
}

export const dataService = {
    createEvent,
    getAllEvents,
    getEventDetails,
    editEvent,
    deleteEvent,
    goToEvent,
    hasGoing,
    goingToEvent
};