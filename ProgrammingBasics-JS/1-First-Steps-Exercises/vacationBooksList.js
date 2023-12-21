function vacationBooksList(input) {
    let totalNumberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);
    let timeToReadBook = totalNumberOfPages / pagesPerHour;
    let hoursPerDay = timeToReadBook / daysPerBook;
    console.log(hoursPerDay);
}

vacationBooksList(["432", "15", "4"]);