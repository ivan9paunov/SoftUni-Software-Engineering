function easterLunch(input) {
    let easterBreadCount = Number(input[0]);
    let eggShells = Number(input[1]);
    let kilosCookies = Number(input[2]);
    let easterBread = 3.20;
    let eggs = 4.35;
    let cookies = 5.40;
    let eggPaint = 0.15;
    let easterBreadPrice = easterBreadCount * easterBread;
    let eggsPrice = eggShells * eggs;
    let cookiesPrice = kilosCookies * cookies;
    let eggPaintPrice = eggShells * 12 * eggPaint;
    let totalPrice = easterBreadPrice + eggsPrice + cookiesPrice + eggPaintPrice;
    console.log(totalPrice.toFixed(2));
}

easterLunch(["3","2","3"]);