function argumentInfo() {
    const argumentsArr = Array.from(arguments);
    let types = {};
    
    for (let arg of argumentsArr) {
        let curType = typeof arg;
        console.log(`${curType}: ${arg}`);
        
        if (!types.hasOwnProperty(curType)) {
            types[curType] = 0;
        }

        types[curType] += 1;
    }

    const kvps = Object.entries(types).sort((a, b) => b[1] - a[1]);
    
    for (let kvp of kvps) {
        console.log(`${kvp[0]} = ${kvp[1]}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })