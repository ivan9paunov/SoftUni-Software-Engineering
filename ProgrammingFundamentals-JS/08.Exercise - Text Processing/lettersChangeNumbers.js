function lettersChangeNumbers(str) {
    let alphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13,
                    n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }

    let pattern = /(?<startChar>[A-Za-z])(?<num>\d+)(?<endChar>[A-Za-z])/gm

    let matches = str.matchAll(pattern);

    let totalSum = 0;
    
    for (let match of matches) {
        let { startChar, num, endChar } = match.groups;
        num = Number(num);
        let curSum = 0;

        if (startChar.charCodeAt() >= 65 && startChar.charCodeAt() <= 90) {
            let startCharToLower = startChar.toLowerCase();
            let startNum = alphabet[startCharToLower];
            curSum = num / startNum;
        } else if (startChar.charCodeAt() >= 97 && startChar.charCodeAt() <= 122) {
            let startNum = alphabet[startChar];
            curSum = num * startNum;
        }

        if (endChar.charCodeAt() >= 65 && endChar.charCodeAt() <= 90) {
            let endCharToLower = endChar.toLowerCase();
            let endNum = alphabet[endCharToLower];
            curSum -= endNum;
        } else if (endChar.charCodeAt() >= 97 && endChar.charCodeAt() <= 122) {
            let endNum = alphabet[endChar];
            curSum += endNum;
        }

        totalSum += curSum;
    }

    console.log(totalSum.toFixed(2));
}

lettersChangeNumbers('A12b s17G');

// lettersChangeNumbers('P34562Z q2576f H456z');