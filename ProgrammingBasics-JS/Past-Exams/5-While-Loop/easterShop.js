function easterShop(input) {
    let index = 0;
    let totalEggs = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let counter = 0;
    let noMoreEggs = false;

    while (command !== "Close") {
        let eggs = Number(input[index]);
        index++;
        if (eggs > totalEggs && command === "Buy") {
            noMoreEggs = true;
            console.log("Not enough eggs in store!");
            console.log(`You can buy only ${totalEggs}.`);
            break;
        }
        if (command === "Buy") {
            totalEggs -= eggs;
            counter += eggs;
        } else if (command === "Fill") {
            totalEggs += eggs;
        }
        command = input[index];
        index++;
    }
    if (!noMoreEggs) {
        console.log("Store is closed!");
        console.log(`${counter} eggs sold.`);
    }
}

// easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
