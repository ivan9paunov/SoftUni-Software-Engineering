function getArticleGenerator(articles) {
    let paragraphs = Array.from(articles);
    const divContainer = document.getElementById('content');

    return () => {
        if (!paragraphs.length) {
            return;
        }

        const article = paragraphs.shift();
        const articleEl = document.createElement('article');
        divContainer.appendChild(articleEl);
        articleEl.textContent = article;
    }
}
