function easterDecoration(input) {
    let index = 0;
    let clients = Number(input[index]);
    index++;
    let command = input[index];
    
    let totalSum = 0;
    for (let client = 1; client <= clients; client++) {
        let items = 0;
        let clientBill = 0;
        while (command !== "Finish") {
            switch (command) {
                case "basket":          clientBill += 1.50; 
                                        items++; break;
                case "wreath":          clientBill += 3.80;
                                        items++; break;
                case "chocolate bunny": clientBill += 7.00;
                                        items++; break;
            }
            index++;
            command = input[index];
        }
        index++;
        command = input[index];

        if (items % 2 === 0) {
            clientBill *= 0.80;
        }

        totalSum += clientBill;
        console.log(`You purchased ${items} items for ${clientBill.toFixed(2)} leva.`);
    }
    let averageBill = totalSum / clients;
    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);
}

easterDecoration(["2","basket","wreath","chocolate bunny","Finish",
                      "wreath","chocolate bunny","Finish"]);