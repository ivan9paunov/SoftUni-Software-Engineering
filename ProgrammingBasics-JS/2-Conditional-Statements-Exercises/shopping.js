function shoping(input) {
    let budget = Number(input[0]);
    let totalGPUs = Number(input[1]);
    let totalCPUs = Number(input[2]);
    let totalRAMs = Number(input[3]);
    let priceGPUs = totalGPUs * 250;
    let priceCPUs = (priceGPUs * 0.35) * totalCPUs;
    let priceRAMs = (priceGPUs * 0.10) * totalRAMs;
    
    let payment = priceGPUs + priceCPUs + priceRAMs;
    if (totalGPUs > totalCPUs) {
        payment *= 0.85;
    }
    if (budget >= payment) {
        console.log(`You have ${(budget - payment).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(payment - budget).toFixed(2)} leva more!`);
    }
}

shoping(["920.45","3","1","1"]);