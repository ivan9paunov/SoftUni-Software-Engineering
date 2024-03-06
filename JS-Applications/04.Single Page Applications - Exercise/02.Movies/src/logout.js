import { updateNav } from "./app.js";
import { showLoginSection } from "./login.js";

export async function onLogout() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const url = 'http://localhost:3030/users/logout';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            }
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        localStorage.clear();
        updateNav();
        showLoginSection();

    } catch (error) {
        alert(error.message);
    }
}