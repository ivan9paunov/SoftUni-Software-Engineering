function attachEvents() {
    const viewArea = document.getElementById('messages');

    const url = 'http://localhost:3030/jsonstore/messenger';

    document.getElementById('submit').addEventListener('click', onSubmit);

    async function onSubmit() {
        const nameRef = document.querySelector('input[name="author"]');
        const msgRef = document.querySelector('input[name="content"]');

        const author = nameRef.value;
        const content = msgRef.value;

        try {
            const request = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ author, content })
            });

            if (!request.ok) {
                const error = await request.json();
                throw new Error(error.message);
            }
            
        } catch (error) {
            alert(`Error: ${error.message}`);
        }

        nameRef.value = '';
        msgRef.value = '';
    }

    document.getElementById('refresh').addEventListener('click', onRefresh);

    async function onRefresh() {
        viewArea.replaceChildren();

        const response = await fetch(url);
        const data = await response.json();

        Object.values(data).forEach(element => {
            viewArea.textContent += `${element.author}: ${element.content}\n`;
        });

        viewArea.textContent = viewArea.textContent.trim();
    }
}

attachEvents();