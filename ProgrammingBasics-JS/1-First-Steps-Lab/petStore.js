function petStore(input) {
    let dogsFood = input[0] * 2.50;
    let catsFood = input[1] * 4;
    let totalSum = dogsFood + catsFood;
    console.log(`${totalSum} lv.`)
}

petStore([12, 9]);