function triangleArea(a, b, c) {
    let semiperimeter = 0.5 * (a + b + c);
    let area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
    console.log(area);
}

triangleArea(2, 3.5, 4);