function deleteByEmail() {
    const inputText = document.querySelectorAll('input[type=text]');
    const resultLine = document.getElementById('result');
    let tableBody = document.querySelector('tbody');
    let tableRows = Array.from(tableBody.children); 

    for (let row of tableRows) {
        let mail = row.children[1].textContent;
        
        if (mail == inputText[0].value) {
            tableBody.removeChild(row);
            resultLine.textContent = 'Deleted.';
            break;
        } else {
            resultLine.textContent = 'Not found.';
        }
    }
    
    inputText[0].value = '';
}