window.addEventListener("load", solve);

function solve() {
    const publishBtn = document.getElementById('publish');
    const makeRef = document.getElementById('make');
    const modelRef = document.getElementById('model');
    const yearRef = document.getElementById('year');
    const fuelRef = document.getElementById('fuel');
    const originalCostRef = document.getElementById('original-cost');
    const sellingPriceRef = document.getElementById('selling-price');
    const tableBodyRef = document.getElementById('table-body');
    const soldCarsRef = document.getElementById('cars-list');
    const profitRef = document.getElementById('profit');
    let totalProfit = 0;

    publishBtn.addEventListener('click', createData);

    function createData(event) {
        event.preventDefault();

        const make = makeRef.value;
        const model = modelRef.value;
        const year = yearRef.value;
        const fuel = fuelRef.value;
        const originalCost = Number(originalCostRef.value);
        const sellingPrice = Number(sellingPriceRef.value);

        if (!make || !model || !year || !fuel || !originalCost || !sellingPrice || sellingPrice <= originalCost) {
            return;
        }

        const trElement = createTableRow(make, model, year, fuel, originalCost, sellingPrice);
        tableBodyRef.appendChild(trElement);

        makeRef.value = '';
        modelRef.value = '';
        yearRef.value = '';
        fuelRef.value = '';
        originalCostRef.value = '';
        sellingPriceRef.value = '';
    }

    function createTableRow(make, model, year, fuel, originalCost, sellingPrice) {
        const trElement = createEl('tr');
        trElement.classList.add('row');
        trElement.appendChild(createEl('td', make));
        trElement.appendChild(createEl('td', model));
        trElement.appendChild(createEl('td', year));
        trElement.appendChild(createEl('td', fuel));
        trElement.appendChild(createEl('td', originalCost));
        trElement.appendChild(createEl('td', sellingPrice));

        const tdButtons = createEl('td');
        const editBtn = createEl('button', 'Edit');
        const sellBtn = createEl('button', 'Sell');

        editBtn.classList.add('action-btn', 'edit');
        sellBtn.classList.add('action-btn', 'sell');

        tdButtons.appendChild(editBtn);
        tdButtons.appendChild(sellBtn);
        trElement.appendChild(tdButtons);

        editBtn.addEventListener('click', onEdit);
        sellBtn.addEventListener('click', onSell);

        return trElement;
    }

    function onEdit(event) {
        const trElement = event.target.parentElement.parentElement;
        const make = trElement.children[0].textContent;
        const model = trElement.children[1].textContent;
        const year = trElement.children[2].textContent;
        const fuel = trElement.children[3].textContent;
        const originalCost = trElement.children[4].textContent;
        const sellingPrice = trElement.children[5].textContent;
        makeRef.value = make;
        modelRef.value = model;
        yearRef.value = year;
        fuelRef.value = fuel;
        originalCostRef.value = originalCost;
        sellingPriceRef.value = sellingPrice;

        trElement.remove();
    }

    function onSell(event) {
        const trElement = event.target.parentElement.parentElement;
        const make = trElement.children[0].textContent;
        const model = trElement.children[1].textContent;
        const year = trElement.children[2].textContent;
        const originalCost = trElement.children[4].textContent;
        const sellingPrice = trElement.children[5].textContent;

        const liElement = createEl('li');
        liElement.classList.add('each-list');
        liElement.appendChild(createEl('span', `${make} ${model}`));
        liElement.appendChild(createEl('span', year));
        liElement.appendChild(createEl('span', `${Number(sellingPrice) - Number(originalCost)}`));
        
        soldCarsRef.appendChild(liElement);
        trElement.remove();

        totalProfit += (Number(sellingPrice) - Number(originalCost));
        profitRef.textContent = totalProfit.toFixed(2);
    }

    function createEl(type, content) {
        const element = document.createElement(type);
    
        if (content) {
          element.textContent = content;
        }
    
        return element;
    }
}