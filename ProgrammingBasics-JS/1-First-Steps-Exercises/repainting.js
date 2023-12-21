function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hoursOfWork = Number(input[3]);
    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint * 1.1) * 14.50;
    let paintThinnerPrice = paintThinner * 5.00;
    let bagPrice = 0.40;
    let totalPriceForSupplies = nylonPrice + paintPrice + paintThinnerPrice + bagPrice;
    let totalPriceForWorkers = (totalPriceForSupplies * 0.3) * hoursOfWork;
    let totalPriceForRepainting = totalPriceForSupplies + totalPriceForWorkers;
    console.log(totalPriceForRepainting);

}

repainting(["5", "10", "10", "1"]);