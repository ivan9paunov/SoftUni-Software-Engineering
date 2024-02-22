class ChristmasDinner {
    constructor(budget) {
        if (budget >= 0) {
            this.budget = budget;
        }  else {
            throw new Error('The budget cannot be a negative number');
        }
        
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping([...product]) {
        const [type, price] = product;
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(type);
        this.budget -= price;

        return `You have successfully bought ${type}!`;
    }

    recipes({...recipe}) {
        let { recipeName, productsList } = recipe;

        for (let product of productsList) {
            if (!this.products.includes(product)) {
                throw new Error('We do not have this product');
            }
        }

        this.dishes.push({ recipeName: recipeName, productsList: productsList });
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        const dishIsCooked = this.dishes.find((dishName) => dishName.recipeName == dish);

        if (!dishIsCooked) {
            throw new Error('We do not have the dish');
        }

        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        const printLine = [];

        for (let guest in this.guests) {
            const dishName = this.guests[guest];
            const dish = this.dishes.find((recipe) => recipe.recipeName == dishName);
            const products = dish.productsList;
            printLine.push(`${guest} will eat ${dishName}, which consists of ${products.join(', ')}`);
        }

        return printLine.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
