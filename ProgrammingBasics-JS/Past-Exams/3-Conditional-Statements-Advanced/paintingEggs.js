function paintingEggs(input) {
    let eggsSize = input[0];
    let eggsColor = input[1];
    let batches = Number(input[2]);

    let price = 0;

    switch (eggsSize) {
        case "Large":
            switch (eggsColor) {
                case "Red"   : price = batches * 16; break;
                case "Green" : price = batches * 12; break;
                case "Yellow": price = batches *  9; break;
            }
        break;
        case "Medium":
            switch (eggsColor) {
                case "Red"   : price = batches * 13; break;
                case "Green" : price = batches *  9; break;
                case "Yellow": price = batches *  7; break;
            }
        break;
        case "Small":
            switch (eggsColor) {
                case "Red"   : price = batches *  9; break;
                case "Green" : price = batches *  8; break;
                case "Yellow": price = batches *  5; break;
            }
        break;
    }

    let expenses = price * 0.35;
    let income = price - expenses;
    console.log(`${income.toFixed(2)} leva.`);
}

paintingEggs(["Large", "Red", "7"]);
