function landschaftDesign(input) {
    let yardSize = input[0];
    let totalSum = yardSize * 7.61;
    let discountAmount = totalSum * 0.18;
    let discountedSum = totalSum - discountAmount;
    console.log(`The final price is: ${discountedSum} lv.`);
    console.log(`The discount is: ${discountAmount} lv.`);
}

landschaftDesign([150]);