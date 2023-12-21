function highJump(input) {
    let goal = Number(input[0]);
    let idx = 1;

    let startingHeight = goal - 30;
    let hasFailed = false;
    let jumps = 0;
    let unsuccessfullTry = 0;

    while (startingHeight <= goal) {
        let jumpHeight = Number(input[idx]);

        if (jumpHeight > startingHeight) {
            startingHeight += 5;
            unsuccessfullTry = 0;
        } else {
            unsuccessfullTry++;
        }

        jumps++;

        if (unsuccessfullTry === 3) {
            hasFailed = true;
            break;
        }

        idx++;
    }

    if (hasFailed) {
        console.log(`Tihomir failed at ${startingHeight}cm after ${jumps} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${goal}cm after ${jumps} jumps.`);
    }
}

highJump(["231","205","212","213","228","229","230","235"]);
// highJump(["250","225","224","225","228","231","235","234","235"]);