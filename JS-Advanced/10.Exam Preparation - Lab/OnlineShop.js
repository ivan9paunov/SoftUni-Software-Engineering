class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        }

        this.products.push({ product: product, quantity: quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const searchedProduct = this.products.find((el) => el.product == product);

        if (!searchedProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        if (minimalQuantity <= searchedProduct.quantity) {
            return `You have enough from product ${product}.`;
        }

        const difference = minimalQuantity - searchedProduct.quantity;
        searchedProduct.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`;
    }

    sellProduct(product) {
        const searchedProduct = this.products.find((el) => el.product == product);

        if (!searchedProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        searchedProduct.quantity -= 1;
        this.sales.push({ product: product, quantity: 1 });
        return `The ${product} has been successfully sold.`;
    }
    
    revision() {
        if (this.sales.length == 0) {
            throw new Error('There are no sales today!');
        }

        const printLine = [];
        printLine.push(`You sold ${this.sales.length} products today!`);
        printLine.push('Products in the warehouse:');
        for (let product of this.products) {
            printLine.push(`${product.product}-${product.quantity} more left`);
        }

        return printLine.join('\n');
    }
}

// const myOnlineShop = new OnlineShop(500)

// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)

// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200)); 
// console.log(myOnlineShop.quantityCheck('headphones', 10)); 
// console.log(myOnlineShop.quantityCheck('laptop', 10)); 
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)

// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());