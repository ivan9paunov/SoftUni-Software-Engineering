async function loadCommits() {
    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    const unorderedList = document.getElementById('commits');
    unorderedList.replaceChildren();

    const url = `https://api.github.com/repos/${username}/${repository}/commits`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            const errMessage = await response.json();
            const errStatus = response.status;
            throw new Error(`${errStatus} (${errMessage.message})`);
        }

        const data = await response.json();

        data.forEach(element => {
            const liElement = createListItem(element.commit.author.name, element.commit.message);
            unorderedList.appendChild(liElement);
        });

    } catch (error) {
        const liElement = document.createElement('li');
        liElement.textContent = error;
        unorderedList.appendChild(liElement);
    }
}

function createListItem(author, message) {
    const liElement = document.createElement('li');
    liElement.textContent = `${author}: ${message}`;
    
    return liElement;
}