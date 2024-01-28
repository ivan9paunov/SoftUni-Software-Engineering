function addItem() {
    const menu = document.getElementById('menu');
    const textRef = document.getElementById('newItemText');
    const valueRef = document.getElementById('newItemValue');
    let text = textRef.value;
    let value = valueRef.value;

    const optionElement = document.createElement('option');
    optionElement.value = value;
    optionElement.text = text;
    menu.appendChild(optionElement);

    textRef.value = '';
    valueRef.value = '';
}