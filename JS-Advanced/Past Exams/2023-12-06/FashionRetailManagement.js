class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        const productExist = this.productStock.find((product) => product.productName == productName && product.size == size);

        if (productExist) {
            productExist.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        } else {
            this.productStock.push({ productName: productName, size: size, quantity: quantity, price: price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size) {
        const productExist = this.productStock.find((product) => product.productName == productName && product.size == size);

        if (!productExist) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        } else {
            const idx = this.productStock.indexOf(productExist);
            this.productStock.splice(idx, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }

    findProductsBySize(size) {
        const filteredBySize = this.productStock.filter((product) => product.size == size);

        if (filteredBySize.length == 0) {
            return `There are no products available in that size`;
        }

        const printLine = [];

        for (let product of filteredBySize) {
            printLine.push(`${product.productName}-${product.quantity} pieces`);
        }

        return printLine.join(', ');
    }

    listProducts() {
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`;
        }

        const sortedStorage = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
        const printLine = [];
        printLine.push(`${this.storehouse} storehouse in ${this.location} available products:`);

        for (let product of sortedStorage) {
            printLine.push(`${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`);
        }

        return printLine.join('\n');
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());





