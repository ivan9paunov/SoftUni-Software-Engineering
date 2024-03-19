import { get, post } from '../utility/requester.js';

const BASE_URL = 'http://localhost:3030/';

const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout'
};

async function login(data) {
    return await post(BASE_URL + endpoints.login, data);
}

async function register(data) {
    return await post(BASE_URL + endpoints.register, data);
}

async function logout() {
    return await get(BASE_URL + endpoints.logout);
}

export const userService = {
    login,
    register,
    logout
};