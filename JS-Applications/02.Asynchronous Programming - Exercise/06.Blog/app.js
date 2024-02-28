function attachEvents() {
    const postsRef = document.getElementById('posts');
    const titleRef = document.getElementById('post-title');
    const postBodyRef = document.getElementById('post-body');
    const postCommRef = document.getElementById('post-comments');
    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');

    const urlPosts = 'http://localhost:3030/jsonstore/blog/posts/';
    const urlComments = 'http://localhost:3030/jsonstore/blog/comments/';

    loadBtn.addEventListener('click', loadPost);
    viewBtn.addEventListener('click', viewPost);

    async function loadPost() {
        postsRef.replaceChildren();

        const postsResponse = await fetch(urlPosts);
        const postsData = await postsResponse.json();
        
        for (let obj of Object.values(postsData)) {
            const post = createOption(obj.id, obj.title);
            postsRef.appendChild(post);
        }
    }

    async function viewPost() {
        const postId = postsRef.value;

        const commentsResponse = await fetch(urlComments);
        const commentsData = await commentsResponse.json();

        const response = await fetch(urlPosts + postId);
        const data = await response.json();

        const title = data.title;
        const text = data.body;
        const comments = Object.values(commentsData).filter((post) => post.postId == postId);

        titleRef.textContent = title.toUpperCase();
        postBodyRef.textContent = text;
        postCommRef.replaceChildren();

        for (let comment of comments) {
            const commentToAppend = createListItem(comment.id, comment.text);
            postCommRef.appendChild(commentToAppend);
        }
    }
 
    function createOption(id, title) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = title.toUpperCase();

        return option;
    }

    function createListItem(id, comment) {
        const liElement = document.createElement('li');
        liElement.setAttribute('id', id);
        liElement.textContent = comment;

        return liElement;
    }
 }
 
 attachEvents();