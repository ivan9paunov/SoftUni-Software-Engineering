function previousDay(year, month, day) {
    let monthIdx = month - 1;
    let date = new Date(year, monthIdx, day);
    date.setDate(date.getDate() - 1);
    let newDay = date.getDate();
    let newMonth = date.getMonth();
    let newYear = date.getFullYear();
    console.log(`${newYear}-${newMonth + 1}-${newDay}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);