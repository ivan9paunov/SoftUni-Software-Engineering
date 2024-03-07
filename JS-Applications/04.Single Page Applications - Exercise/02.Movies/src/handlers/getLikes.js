export async function getLikes(movieId) {
    const url = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        alert(error.message);
    }
}