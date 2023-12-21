function areaOfFigures(input) {
    let figureShape = input[0];
    let area = 0;
    if (figureShape === "square") {
        let side = Number(input[1]);
        area = side * side;
    } else if (figureShape === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB;
    } else if (figureShape === "circle") {
        let radius = Number(input[1]);
        area = Math.PI * radius * radius;
    } else if (figureShape === "triangle") {
        let side = Number(input[1]);
        let height = Number(input[2]);
        area = (side * height) / 2;
    }
    console.log(area.toFixed(3));
}

areaOfFigures(["triangle", "4.5", "20"]);