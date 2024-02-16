class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }   
    
    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        if (this.items.length == this.capacity) {
            throw new Error('The inventory is already full.');
        }

        const foundItem = this.items.find((item) => item.itemName == itemName);

        if (foundItem) {
            foundItem.quantity += quantity;
        } else {
            this.items.push({ itemName: itemName, quantity: quantity });
        }

        return (`Added ${quantity} ${itemName}(s) to the inventory.`);
    };

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const foundItem = this.items.find((item) => item.itemName == itemName);

        if (!foundItem) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        if (quantity > foundItem.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        foundItem.quantity -= quantity;

        if (foundItem.quantity == 0) {
            const idx = this.items.indexOf(foundItem);
            this.items.splice(idx, 1);
            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    };

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const foundItem = this.items.find((item) => item.itemName == itemName);

        if (foundItem) {
            foundItem.quantity += quantity;
        } else {
            this.items.push({ itemName: itemName, quantity: quantity });
        }

        if (this.outOfStock.includes(itemName)) {
            const idx = this.outOfStock.indexOf(itemName);
            this.outOfStock.splice(idx, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    };

    getInventorySummary() {
        const printLine = [];
        printLine.push('Current Inventory:');

        for (let item of this.items) {
            printLine.push(`${item.itemName}: ${item.quantity}`);
        }

        if (this.outOfStock.length > 0) {
            let outOfStock = 'Out of Stock: ';
            const items = this.outOfStock.join(', ');
            outOfStock += items;
            printLine.push(outOfStock);
        }

        return printLine.join('\n');
    }
}

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());



    