function matchDates(inputArr) {
    let str = inputArr.shift();

    let pattern = /\b(?<day>\d{2})(?<separator>[/\-.])(?<month>[A-z][a-z]{2})\2(?<year>\d{4})\b/gm;

    let matches = str.matchAll(pattern);

    for (let match of matches) {
        let { day, month, year } = match.groups;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);