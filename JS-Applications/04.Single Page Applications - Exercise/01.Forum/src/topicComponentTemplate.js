import { conversation } from "./conversation.js";

export function topicHomeView(data) {
    const topicDiv = document.createElement('div');
    topicDiv.classList.add('topic-name-wrapper');
    topicDiv.dataset.id = data._id;
    
    const topicName = document.createElement('div');
    topicName.classList.add('topic-name');
    
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.classList.add('normal');
    
    const h2 = document.createElement('h2');
    h2.textContent = data.title;
    
    const columnsDiv = document.createElement('div');
    columnsDiv.classList.add('columns');
    
    const divEl = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode("Date: "));
    const timeEl = document.createElement('time');
    timeEl.textContent = data.time;
    paragraph.appendChild(timeEl);
    const divNickName = document.createElement('div');
    divNickName.classList.add('nick-name');
    const pElement = document.createElement('p');
    pElement.appendChild(document.createTextNode('Usermane: '));
    const spanEl = document.createElement('span');
    spanEl.textContent = data.username;
    pElement.appendChild(spanEl);
    
    divNickName.appendChild(pElement);
    divEl.appendChild(paragraph);
    divEl.appendChild(divNickName);
    columnsDiv.appendChild(divEl);
    anchor.appendChild(h2);
    topicName.appendChild(anchor);
    topicName.appendChild(columnsDiv);
    topicDiv.appendChild(topicName);

    anchor.addEventListener('click', conversation);

    return topicDiv;
}