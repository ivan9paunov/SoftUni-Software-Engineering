import { useEffect, useState } from "react";

import gamesAPI from "../api/games-api.js";

export function useGetAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getAll();

            setGames(result);
        })();
    }, []);

    return [games, setGames];
}

export function useGetOneGames(gameId) {
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getOne(gameId);
            setGame(result);
        })();
    }, [gameId]);

    return [
        game,
        setGame
    ];
}

export function useCreateGame() {
    const gameCreateHandler = (gameData) => gamesAPI.create(gameData);

    return gameCreateHandler;
};