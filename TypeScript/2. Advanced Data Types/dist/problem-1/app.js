"use strict";
const calorieObject = (data) => {
    let products = {};
    for (let i = 0; i < data.length; i += 2) {
        const name = data[i];
        const kcal = Number(data[i + 1]);
        if (products.hasOwnProperty(name)) {
            products[name] += kcal;
        }
        else {
            products[name] = kcal;
        }
    }
    console.log(products);
};
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log('---');
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
