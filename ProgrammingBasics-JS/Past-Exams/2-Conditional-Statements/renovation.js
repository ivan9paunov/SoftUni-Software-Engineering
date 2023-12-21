function renovation(input) {
    let budget = Number(input[0]);
    let width = Number(input[1]);
    let length = Number(input[2]);
    let side = Number(input[3]);
    let height = Number(input[4]);
    let singlePrice = Number(input[5]);
    let workerPayment = Number(input[6]);

    let area = width * length;
    let pieceArea = side * height / 2;
    let piecesNeeded = Math.ceil(area / pieceArea) + 5;
    let totalSum = piecesNeeded * singlePrice + workerPayment;

    if (totalSum <= budget) {
        console.log(`${((budget - totalSum).toFixed(2))} lv left.`);
    } else {
        console.log(`You'll need ${((totalSum - budget).toFixed(2))} lv more.`);
    }
}

renovation(["1000","5.55","8.95","0.90","0.85","13.99","321"]);