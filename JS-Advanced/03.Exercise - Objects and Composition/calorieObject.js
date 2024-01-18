function calorieObject(inputArr) {
    let products = {};

    for (let i = 0; i < inputArr.length; i += 2) {
        let name = inputArr[i];
        let kcal = Number(inputArr[i + 1]);
        products[name] = kcal;
    }

    console.log(products);
}

calorieObject(
    ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
);