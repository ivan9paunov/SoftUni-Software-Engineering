class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (!model || typeof model != 'string' 
        || !Number.isInteger(storage) || storage < 0 
        || typeof price != 'number' || price < 0 
        || !condition || typeof condition != 'string') {
            throw new Error('Invalid smartphone!');
        }

        this.availableSmartphones.push({ model: model, storage: storage, price: price, condition: condition });
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const foundPhone = this.availableSmartphones.find((phone) => phone.model == model);

        if (!foundPhone) {
            throw new Error(`${model} was not found!`);
        }

        if (foundPhone.storage >= desiredStorage) {
            foundPhone.price;
        } else {
            if ((desiredStorage - foundPhone.storage) <= 128) {
                foundPhone.price *= 0.90;
            } else {
                foundPhone.price *= 0.80;
            }
        }

        this.soldSmartphones.push({ model: foundPhone.model, storage: foundPhone.storage, soldPrice: foundPhone.price });
        this.revenue += foundPhone.price;
        const idx = this.availableSmartphones.indexOf(foundPhone);
        this.availableSmartphones.splice(idx, 1);

        return `${model} was sold for ${foundPhone.price.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length == 0) {
            throw new Error('There are no available smartphones!');
        }

        this.availableSmartphones.map((phone) => phone.storage *= 2);

        const printLine = [];
        printLine.push(`Upgraded Smartphones:`);

        for (let phone of this.availableSmartphones) {
            printLine.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
        }

        return printLine.join('\n');
    }
    
    salesJournal(criteria) {
        if (criteria == 'storage') {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        } else if (criteria == 'model') {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        const printLine = [];
        printLine.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);
        printLine.push(`${this.soldSmartphones.length} smartphones sold:`);

        for (let phone of this.soldSmartphones) {
            printLine.push(`${phone.model} / ${phone.storage} GB / ${phone.soldPrice.toFixed(2)}$`);
        }

        return printLine.join('\n');
    }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));



