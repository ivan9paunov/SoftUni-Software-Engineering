function bookShelf(inputArr) {
    let shelves = {};
    let helpingTemplate = {};

    for (let command of inputArr) {
        if (command.includes('->')) {
            let [shelf, genre] = command.split(' -> ');
            
            if (!shelves.hasOwnProperty(shelf)) {
                let booksCounter = 0;

                shelves[shelf] = {};
                shelves[shelf][genre] = [];
                shelves[shelf]['totalBooks'] = booksCounter;

                helpingTemplate[genre] = shelf;
            }

        } else {
            let [bookInfo, bookGenre] = command.split(', ');
            if (helpingTemplate.hasOwnProperty(bookGenre)) {
                let shelf = helpingTemplate[bookGenre];
                shelves[shelf][bookGenre].push(bookInfo);
                shelves[shelf].totalBooks++;
            } 
        }
    }

    let shelvesEntries = Object.entries(shelves).sort((a, b) => b[1].totalBooks - a[1].totalBooks);

    for (let shelf of shelvesEntries) {
        let [shelfNum, books] = shelf;
        let entries = Object.entries(books);
        let [booksInfo, booksCount] = entries;
        let [genre, allBooks] = booksInfo;
        allBooks.sort((a, b) => a.localeCompare(b));
        let totalBooks = booksCount[1];
        
        console.log(`${shelfNum} ${genre}: ${totalBooks}`);

        for (let book of allBooks) {
            console.log(`--> ${book}`);
        }
    }
}

bookShelf([
    '1 -> history', 
    '1 -> action', 
    'Deathin Time: Criss Bell, mystery', 
    '2 -> mystery', 
    '3 -> sci-fi', 
    'Child of Silver: Bruce Rich, mystery', 
    'Hurting Secrets: Dustin Bolt, action', 
    'Future of Dawn: Aiden Rose, sci-fi', 
    'Lions and Rats: Gabe Roads, history', 
    '2 -> romance', 
    'Effect of the Void: Shay B, romance', 
    'Losing Dreams: Gail Starr, sci-fi', 
    'Name of Earth: Jo Bell, sci-fi', 
    'Pilots of Stone: Brook Jay, history'
]);