function sortAnArrayBy2Criteria(arr) {
    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    
    console.log(sortedArr.join('\n'));
}

sortAnArrayBy2Criteria(['beta', 'alpha', 'gamma']);