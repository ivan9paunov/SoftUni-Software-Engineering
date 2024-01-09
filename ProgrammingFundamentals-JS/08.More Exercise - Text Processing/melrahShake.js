function melrahShake(input) {
    let [str, pattern] = input;

    while (pattern.length > 0) {
        let firstOcc = str.indexOf(pattern);
        let lastOcc = str.lastIndexOf(pattern);
        let length = pattern.length;

        if (firstOcc != lastOcc) {
            str = str.slice(0, firstOcc) + str.slice(firstOcc + length, str.length);
            str = str.slice(0, lastOcc - length) + str.slice(lastOcc, str.length);
            console.log('Shaked it.');
        } else {
            break;
        }

        let halfLength = Math.floor(pattern.length / 2);
        pattern = pattern.slice(0, halfLength) + pattern.slice(halfLength + 1, pattern.length);
    }

    console.log('No shake.');
    console.log(str);
}

// melrahShake([
//     'astalavista baby',
//     'sta'
// ]);

melrahShake([
    '##mtm!!mm.mm*mtm.#',
    'mtm'
]);