function cinema(input) {
    let projectionType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let price = 0;
    let totalPeople = rows * cols;
    if(projectionType === "Premiere"){
        price = 12.00;
    } else if(projectionType === "Normal"){
        price = 7.50;
    } else if(projectionType === "Discount"){
        price = 5.00;
    }
    let profits = totalPeople * price;
    console.log(`${profits.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"]);