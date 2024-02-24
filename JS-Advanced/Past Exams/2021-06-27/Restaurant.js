class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = []
    }

    loadProducts(productsArr) {
        for (let product of productsArr) {
            let [name, quantity, totalPrice] = product.split(' ');
            quantity = Number(quantity);
            totalPrice = Number(totalPrice);

            if (this.budgetMoney >= totalPrice) {
                if (this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] += quantity;
                } else {
                    this.stockProducts[name] = quantity;
                }

                this.budgetMoney -= totalPrice;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products: neededProducts,
                price: price
            }

            if (Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        const printLine = [];

        for (let meal in this.menu) {
            printLine.push(`${meal} - $ ${this.menu[meal].price}`);
        }

        return printLine.join('\n');
    }

    makeTheOrder(meal) {
        const mealExist = this.menu[meal];

        if (!mealExist) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        for (let needed of mealExist.products) {
            let [name, qty] = needed.split(' ');
            qty = Number(qty);

            if (!this.stockProducts.hasOwnProperty(name) || this.stockProducts[name] < qty) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (let needed of mealExist.products) {
            let [name, qty] = needed.split(' ');
            qty = Number(qty);

            this.stockProducts[name] -= qty;
        }

        this.budgetMoney += mealExist.price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${mealExist.price}.`;
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

