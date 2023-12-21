function matchPhoneNumber(inputArr) {
    let str = inputArr.shift();

    let pattern = /\+359(?<separator>[- ])2\1\d{3}\1\d{4}\b/gm;

    let matches = str.match(pattern);

    console.log(matches.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);