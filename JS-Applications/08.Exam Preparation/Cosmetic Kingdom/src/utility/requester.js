import { userHelper } from './userHelper.js';

async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    const accessToken = userHelper.getUserToken();

    if (accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            if (response.status == 403) {
                userHelper.clearUserData();
            }
            
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        }
        
        return await response.json();

    } catch (error) {
        alert(error.message);
        throw new Error(error);
    }
}

export const get = (url) => requester('GET', url);
export const post = (url, data) => requester('POST', url, data);
export const put = (url, data) => requester('PUT', url, data);
export const del = (url) => requester('DELETE', url);