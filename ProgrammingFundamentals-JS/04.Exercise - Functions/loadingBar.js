function loadingBar(percentage) {
    let printArray = [];
    let tensToOnes = percentage / 10;

    for (let count = 1; count <= 10; count++) {
        if (percentage == 0) {
            printArray.push('.');
        } else if (count <= tensToOnes) {
            printArray.push('%');
        } else {
            printArray.push('.');
        }
    }

    if (percentage == 100) {
        console.log('100% Complete!');
        console.log(`[${printArray.join('')}]`);
    } else {
        console.log(`${percentage}% [${printArray.join('')}]`);
        console.log('Still loading...');

    }
} 

loadingBar(30);
// loadingBar(50);
// loadingBar(100);