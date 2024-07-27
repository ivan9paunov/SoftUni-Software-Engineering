import { useEffect, useState } from 'react';
import commentsAPI from '../api/comments-api.js';

export function useCreateComment() {
    const createHandler = (gameId, comment) => commentsAPI.create(gameId, comment);

    return createHandler;
}

export function useGetAllComments(gameId) {
    const [commnets, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(gameId);

            setComments(result);
        })();
    }, [gameId]);

    return [commnets, setComments];
}