function addItem() {
    const list = document.getElementById('items');
    const newEl = list.appendChild(document.createElement("li"));
    const inputText = document.getElementById('newItemText');
    newEl.textContent = inputText.value;
    inputText.value = '';
}