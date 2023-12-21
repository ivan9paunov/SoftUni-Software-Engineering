function oldBooks(input) {
    let index = 0;
    let bookToFind = input[index];
    index++;

    let currentBook = input[index];
    index++;

    let checkedBooks = 0;
    while(currentBook !== "No More Books") {
        if(currentBook === bookToFind) {
            break;
        }
        checkedBooks++;
        currentBook = input[index];
        index++;
    }

    if(currentBook === bookToFind) {
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`);
    }
}

oldBooks(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"]);