export async function hasLikedCheck(movieId, userId) {
    const url = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        return data.length > 0 ? true : false;

    } catch (error) {
        alert(error.message);
    }
}