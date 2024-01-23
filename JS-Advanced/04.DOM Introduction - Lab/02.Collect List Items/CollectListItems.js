function extractText() {
    const listItemsRef = document.querySelectorAll('li');
    let result = [];
    
    for (let el of listItemsRef) {
        result.push(el.textContent);
    }
    
    const textAreaRef = document.getElementById('result');
    textAreaRef.value = result.join('\n');
}