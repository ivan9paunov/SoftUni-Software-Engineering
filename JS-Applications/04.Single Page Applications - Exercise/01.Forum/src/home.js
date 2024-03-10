import { topicHomeView } from "./topicComponentTemplate.js";

export function homeView() {
    document.querySelector('main').style.display = 'block';

    const createTopicContainer = document.querySelector('.new-topic-border');
    const formRef = createTopicContainer.querySelector('form');

    getAllTopics();

    formRef.querySelector('.public').addEventListener('click', newTopic);
    formRef.querySelector('.cancel').addEventListener('click', onCancel);

    async function newTopic(event) {
        event.preventDefault();

        const formData = new FormData(formRef);
        const inputs = Object.fromEntries(formData);

        const title = inputs.topicName.trim();
        const username = inputs.username.trim();
        const post = inputs.postText.trim();
        const time = new Date;

        try {
            if (!title || !username || !post) {
                return;
            }

            const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, username, post, time })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }

            const data = await response.json();

            getAllTopics();
            formRef.reset();

        } catch (error) {
            alert(error.message);
        }
    }

    function onCancel(event) {
        event.preventDefault();
        formRef.reset();
    }
}

async function getAllTopics() {
    const topicContainer = document.querySelector('.topic-container');

    try {
        const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        const topics = Object.values(data);

        topicContainer.replaceChildren(...topics.map(topicHomeView));

    } catch (error) {
        alert(error.message);
    }
}
