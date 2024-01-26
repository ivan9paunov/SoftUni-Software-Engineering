function generateReport() {
    const headRows = document.querySelector('thead > tr');
    let headRowArr = Array.from(headRows.children); 

    const bodyRows = document.querySelectorAll('tbody > tr');
    let bodyRowsArr = Array.from(bodyRows);

    let collectedData = [];

    for (let bodyRow of bodyRowsArr) {
        let bodyCols = Array.from(bodyRow.children);
        let dataObj = {};

        for (let i = 0; i < bodyCols.length; i++) {
            const data = bodyCols[i].textContent;
            let columnName = headRowArr[i].textContent.trim();
            const isChecked = headRowArr[i].children[0].checked;

            if (isChecked) {
                columnName = columnName.toLowerCase();
                dataObj[columnName] = data;
            }
        }

        collectedData.push(dataObj);
    }

    let stringified = JSON.stringify(collectedData);
    const outputBox = document.getElementById('output');
    outputBox.value = stringified;
}