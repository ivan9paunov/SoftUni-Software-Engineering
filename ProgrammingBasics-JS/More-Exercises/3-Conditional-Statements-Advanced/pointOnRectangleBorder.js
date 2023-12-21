function pointOnRectangleBorder(input){
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);
    let position = "";

    if(x === x1 || x === x2){
        if(y >= y1 && y <= y2) {
            position = "Border";
        } else {
            position = "Inside / Outside";
        }
    } else if(y === y1 || y === y2){
        if(x >= x1 && x <= x2){
            position = "Border";
        } else {
            position = "Inside / Outside";
        }
    } else {
        position = "Inside / Outside";
    }
    console.log(position);
}

pointOnRectangleBorder(["2","-3","12","3","10","3"]);