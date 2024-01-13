function pieceOfPie(strArr, startingStr, endingStr) {
    let start = strArr.indexOf(startingStr);
    let end = strArr.indexOf(endingStr) + 1;
    
    let slicedPie = strArr.slice(start, end);

    // console.log(slicedPie);
    
    return slicedPie;
}

pieceOfPie(
    ['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],

    'Key Lime Pie',

    'Lemon Meringue Pie'
);