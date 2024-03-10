export async function getTopic(movieId) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${movieId}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        alert(error.message);
    }
}