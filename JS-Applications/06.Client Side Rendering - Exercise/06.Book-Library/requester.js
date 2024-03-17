async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const get = (url) => requester('GET', url);
export const post = (url, data) => requester('POST', url, data);
export const put = (url, data) => requester('PUT', url, data);
export const del = (url) => requester('DELETE', url);
