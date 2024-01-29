function solve() {
    const textAreas = Array.from(document.querySelectorAll('textarea'));
    const addProductArea = textAreas[0];
    const outputArea = textAreas[1];
    
    const buttons = Array.from(document.querySelectorAll('button'));
    const generateBtn = buttons[0];
    const buyBtn = buttons[1];
    generateBtn.addEventListener('click', generateProduct);
    buyBtn.addEventListener('click', buyProducts);

    const tbodyRef = document.querySelector('tbody');
    tbodyRef.children[0].children[4].children[0].disabled = false;

    function generateProduct(event) {
        const inputData = addProductArea.value; 
        const productsObj = JSON.parse(inputData);

        for (let productObj of productsObj) {
            const trElement = document.createElement('tr');
            tbodyRef.appendChild(trElement);
    
            const tdImg = document.createElement('td');
            const pElementImg = document.createElement('img');
            trElement.appendChild(tdImg);
            tdImg.appendChild(pElementImg);
            pElementImg.src = productObj.img;
    
            const tdName = document.createElement('td');
            const pElementName = document.createElement('p');
            trElement.appendChild(tdName);
            tdName.appendChild(pElementName);
            pElementName.textContent = productObj.name;
    
            const tdPrice = document.createElement('td');
            const pElementPrice = document.createElement('p');
            trElement.appendChild(tdPrice);
            tdPrice.appendChild(pElementPrice);
            pElementPrice.textContent = productObj.price;
    
            const tdDecFactor = document.createElement('td');
            const pElementDecFactor = document.createElement('p');
            trElement.appendChild(tdDecFactor);
            tdDecFactor.appendChild(pElementDecFactor);
            pElementDecFactor.textContent = productObj.decFactor;
    
            const tdInput = document.createElement('td');
            const inputElement = document.createElement('input');
            trElement.appendChild(tdInput);
            tdInput.appendChild(inputElement);
            inputElement.type = 'checkbox';
        }
    }

    function buyProducts(event) {
        let boughtProducts = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        const productsRows = Array.from(tbodyRef.children);

        for (let product of productsRows) {
            const isChecked = product.children[4].children[0].checked;

            if (isChecked) {
                const productName = product.children[1].children[0].textContent;
                let productPrice = product.children[2].children[0].textContent;
                let productDecFactor = product.children[3].children[0].textContent;

                boughtProducts.push(productName);
                totalPrice += Number(productPrice);
                totalDecFactor += Number(productDecFactor);
            }
        }

        let avgDecFactor = totalDecFactor / boughtProducts.length;

        outputArea.value = `Bought furniture: ${boughtProducts.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`
    }
}