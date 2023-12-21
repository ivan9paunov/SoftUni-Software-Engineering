function cake(input) {
    let index = 0;
    let cakeWidth = Number(input[index]);
    index++;
    let cakeHeight = Number(input[index]);
    index++;
    let command = input[index];

    let cakeSize = cakeWidth * cakeHeight;
    while(command !== "STOP") {
        let currentPiece = Number(command);
        cakeSize -= currentPiece;
        if(cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
        
        index++;
        command = input[index];
    }
    if(cakeSize > 0) {
        console.log(`${cakeSize} pieces are left.`);
    }
}

// cake(["10","10","20","20","20","20","21"]);
cake(["10","2","2","4","6","STOP"]);

// My variant:

// function cake(input) {
//     let index = 0;
//     let cakeWidth = Number(input[index]);
//     index++;
//     let cakeHeight = Number(input[index]);
//     index++;
//     let currernPiece = input[index];
//     index++;

//     let cakeSize = cakeWidth * cakeHeight;
//     while(currernPiece !== "STOP") {
//         cakeSize -= Number(currernPiece);
//         if(cakeSize <= 0) {
//             break;
//         }

//         currernPiece = input[index];
//         index++;
//     }
//     if(cakeSize <= 0) {
//         console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
//     } else {
//         console.log(`${cakeSize} pieces are left.`);
//     }
// }