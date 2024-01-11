function cookingByNumbers(numAsStr, ...operations) {
    let num = Number(numAsStr);
    
    for (let operation of operations) {
        if (operation == 'chop') {
            num /= 2;
        } else if (operation == 'dice') {
            num = Math.sqrt(num);
        } else if (operation == 'spice') {
            num += 1;
        } else if (operation == 'bake') {
            num *= 3;
        } else if (operation == 'fillet') {
            num -= num * 0.2;
        }

        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');