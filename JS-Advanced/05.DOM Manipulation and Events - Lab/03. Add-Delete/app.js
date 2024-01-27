function addItem() {
    const inputText = document.getElementById('newItemText');
    const list = document.getElementById('items');

    const liElement = document.createElement('li');
    list.appendChild(liElement);
    liElement.textContent = inputText.value;
    
    const aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]';
    liElement.appendChild(aElement);

    liElement.addEventListener('click', deleteItem);
    
    
    inputText.value = '';

    function deleteItem() {
        liElement.remove();
    }
}