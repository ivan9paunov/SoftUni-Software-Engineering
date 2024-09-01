import * as request from './requester.js';

const BASE_URL = 'http://localhost:3030/data/games';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const games = Object.values(result);

    return games;
};

export const getLatest = async () => {
    const result = await request.get(`${BASE_URL}?sortBy=_createdOn%20desc&pageSize=3`);
    
    const latestGames = Object.values(result);
    
    return latestGames;
};

export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`);

export const create = (gameData) => request.post(`${BASE_URL}`, gameData);

export const remove = (gameId) => request.del(`${BASE_URL}/${gameId}`);

export const update = (gameId, gameData) => request.put(`${BASE_URL}/${gameId}`, gameData);

const gamesAPI = {
    getAll,
    getLatest,
    getOne,
    create,
    remove,
    update
};

export default gamesAPI;