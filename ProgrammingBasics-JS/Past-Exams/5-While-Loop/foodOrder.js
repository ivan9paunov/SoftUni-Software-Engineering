function foodOrder(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];

    let totalPrice = 2.50;
    let items = 0;

    while (command !== "Order") {
        let food = command;
        index++;
        let price = Number(input[index]);
        if (totalPrice + price > budget) {
            console.log("You will exceed the budget if you order this!");
        } else {
            totalPrice = totalPrice + price;
            items++;
        }
        index++;
        command = input[index];

    }
    console.log(`You ordered ${items} items!`);
    console.log(`Total: ${totalPrice.toFixed(2)}`);
}

foodOrder(["30.00","Salad","5.50","Steak","7.90","Potatoes","4.50","Order"]);