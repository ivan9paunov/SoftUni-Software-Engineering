function adAstra(inputArr) {
    let str = inputArr.shift();
    let totalCalories = 0;
    let food = [];

    let pattern = /([|#])(?<itemName>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/gm;

    let matches = str.matchAll(pattern);

    for (let match of matches) {
        let { itemName, expDate, kcal } = match.groups;
        kcal = Number(kcal);

        food.push({ itemName, expDate, kcal });
        totalCalories += kcal;
    }

    let foodForDays = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${foodForDays} days!`);
    
    food.forEach(product => console.log(`Item: ${product.itemName}, Best before: ${product.expDate}, Nutrition: ${product.kcal}`));  
}

adAstra(
    [
        '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'    
    ]
);

// adAstra(
//     [ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]
// );

// adAstra(
//     ['Hello|#Invalid food#19/03/20#450|$5*(@' ]
// );