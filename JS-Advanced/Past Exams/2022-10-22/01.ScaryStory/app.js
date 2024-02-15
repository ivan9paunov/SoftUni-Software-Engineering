window.addEventListener("load", solve);

function solve() {
  ///input refferences
  const firstNameRef = document.getElementById('first-name');
  const lastNameRef = document.getElementById('last-name');
  const ageRef = document.getElementById('age');
  const titleRef = document.getElementById('story-title');
  const genreRef = document.getElementById('genre');
  const storyRef = document.getElementById('story');
  const publishBtn = document.getElementById('form-btn');
  const previewList = document.getElementById('preview-list');
  const formRef = document.querySelector('form');
  const mainRef = document.getElementById('main');

  publishBtn.addEventListener('click', createInfo);

  function createInfo() {
    const firstName = firstNameRef.value;
    const lastName = lastNameRef.value;
    const age = ageRef.value;
    const title = titleRef.value;
    const genre = genreRef.value;
    const story = storyRef.value;

    if (!firstName || !lastName || !age || !title || !story) {
      return;
    }

    const liElement = createListItem(firstName, lastName, age, title, genre, story);
    previewList.appendChild(liElement);

    publishBtn.disabled = true;
    formRef.reset();

  }

  function createListItem(firstName, lastName, age, title, genre, story) {
    const liElement = createEl('li');
    liElement.classList.add('story-info');
    liElement.appendChild(createArticle(firstName, lastName, age, title, genre, story));
    
    const saveBtn = createEl('button', 'Save');
    const editBtn = createEl('button', 'Edit');
    const deleteBtn = createEl('button', 'Delete');

    saveBtn.classList.add('save-btn');
    editBtn.classList.add('edit-btn');
    deleteBtn.classList.add('delete-btn');

    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);

    saveBtn.addEventListener('click', saveComment);
    editBtn.addEventListener('click', () => onEdit(firstName, lastName, age, title, genre, story));
    deleteBtn.addEventListener('click', deleteComment);

    return liElement;
  }

  function createArticle(firstName, lastName, age, title, genre, story) {
    const articleEl = createEl('article');
    articleEl.appendChild(createEl('h4', `Name: ${firstName} ${lastName}`));
    articleEl.appendChild(createEl('p', `Age: ${age}`));
    articleEl.appendChild(createEl('p', `Title: ${title}`));
    articleEl.appendChild(createEl('p', `Genre: ${genre}`));
    articleEl.appendChild(createEl('p', `${story}`));

    return articleEl;
  }

  function saveComment() {
    mainRef.textContent = '';
    const h1Element = createEl('h1', 'Your scary story is saved!');
    mainRef.appendChild(h1Element);
  }

  function onEdit(firstName, lastName, age, title, genre, story) {
    firstNameRef.value = firstName;
    lastNameRef.value = lastName;
    ageRef.value = age;
    titleRef.value = title;
    genreRef.value = genre;
    storyRef.value = story;

    previewList.textContent = '';
    publishBtn.disabled = false;
  }

  function deleteComment(event) {
    event.target.parentElement.remove();
    publishBtn.disabled = false;
  }

  function createEl(type, content) {
    const element = document.createElement(type);

    if (content) {
      element.textContent = content;
    }

    return element;
  }
}
