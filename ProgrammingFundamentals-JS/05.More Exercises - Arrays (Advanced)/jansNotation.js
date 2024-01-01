function jansNotation(instructions) {
    let nums = [];

    for (let char of instructions) {
        if (/[0-9]/.test(char)) {
            nums.push(char);
        } else if (char == '+') {
            if (nums.length > 1) {
                let num2 = nums.pop();
                let num1 = nums.pop();
                let result = num1 + num2;
                nums.push(result);
            } else {
                console.log('Error: not enough operands!');
                return;
            }
        } else if (char == '-') {
            if (nums.length > 1) {
                let num2 = nums.pop();
                let num1 = nums.pop();
                let result = num1 - num2;
                nums.push(result);
            } else {
                console.log('Error: not enough operands!');
                error = true;
                return;
            }
        } else if (char == '*') {
            if (nums.length > 1) {
                let num2 = nums.pop();
                let num1 = nums.pop();
                let result = num1 * num2;
                nums.push(result);
            } else {
                console.log('Error: not enough operands!');
                return;
            }
        } else if (char == '/') {
            if (nums.length > 1) {
                let num2 = nums.pop();
                let num1 = nums.pop();
                let result = num1 / num2;
                nums.push(result);
            } else {
                console.log('Error: not enough operands!');
                return;
            }
        }
    }

    if (nums.length == 1) {
        console.log(nums[0]);
    } else {
        console.log('Error: too many operands!');
    }
}

jansNotation([
    3, 
    4, 
    '+'
]);

// jansNotation([
//     5,
//     3, 
//     4, 
//     '*', 
//     '-'
// ]);

// jansNotation([
//     7,
//     33, 
//     8, 
//     '-'
// ]);

// jansNotation([
//     15,
//     '/'
// ]);

// jansNotation([
//     31,
//     2, 
//     '+', 
//     11, 
//     '/'
// ]);

// jansNotation([
//     -1,
//     1, 
//     '+', 
//     101, 
//     '*',
//     18,
//     '+',
//     3,
//     '/'
// ]);