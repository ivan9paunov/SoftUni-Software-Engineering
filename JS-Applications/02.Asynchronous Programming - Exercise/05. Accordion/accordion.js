window.onload = solution();

async function solution() {
    const main = document.getElementById('main');

    const urlArticles = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const urlDetails = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    
    const articlesResponse = await fetch(urlArticles);
    const articlesData = await articlesResponse.json();

    for (let article of articlesData) {
        const [id, title] = Object.values(article);

        const detailsResponse = await fetch(urlDetails + id);
        const articleDetails = await detailsResponse.json();

        const articleContent = createArticle(title, id, articleDetails.content);
        main.appendChild(articleContent);
    }

    function createArticle(title, id, article) {
        const mainDiv = createEl('div', 'accordion');

        const headDiv = createEl('div', 'head');
        headDiv.appendChild(createEl('span', '', title));
        const moreBtn = createEl('button', 'button', 'More');
        moreBtn.setAttribute('id', id);
        headDiv.appendChild(moreBtn);

        const extraDiv = createEl('div', 'extra');
        extraDiv.appendChild(createEl('p', '', article));
        extraDiv.style.display = 'none';

        mainDiv.appendChild(headDiv);
        mainDiv.appendChild(extraDiv);

        moreBtn.addEventListener('click', toggleInfo);

        return mainDiv;
    }

    function toggleInfo(event) {
        const btn = event.target;
        const mainDiv = btn.parentElement.parentElement;
        const divToToggle = mainDiv.children[1];

        if (btn.textContent == 'More') {
            btn.textContent = 'Less';
            divToToggle.style.display = 'block';
        } else if (btn.textContent == 'Less') {
            btn.textContent = 'More';
            divToToggle.style.display = 'none';
        }
    }

    function createEl(type, cls, content) {
        const el = document.createElement(type);

        if (cls) {
            el.classList.add(cls);
        }

        if (content) {
            el.textContent = content;
        }

        return el;
    }
}