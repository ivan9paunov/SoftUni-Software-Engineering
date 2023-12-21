function requiredReading(pages, pagesPerHour, deadlineDays) {
    let totalTime = pages / pagesPerHour;
    let requiredHours = totalTime / deadlineDays;
    console.log(requiredHours);
}

requiredReading(212, 20, 2);