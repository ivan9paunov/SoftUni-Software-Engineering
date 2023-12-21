function schoolLibrary(arrOfBooks) {
    let yourBooks = arrOfBooks.shift().split('&');
    
    for (let actions of arrOfBooks) {
        let tokens = actions.split(' | ');
        let command = tokens.shift();

        if (command == 'Done') {

        } else if (command == 'Add Book') {
            let bookName = tokens.shift();

            if (!yourBooks.includes(bookName)) {
                yourBooks.unshift(bookName);
            }
        } else if (command == 'Take Book') {
            let bookName = tokens.shift();

            if (yourBooks.includes(bookName)) {
                let idx = yourBooks.indexOf(bookName);
                yourBooks.splice(idx, 1);
            }
        } else if (command == 'Swap Books') {
            let firstBook = tokens.shift();
            let secondBook = tokens.shift();

            if (yourBooks.includes(firstBook) && yourBooks.includes(secondBook)) {
                let idxOfFirst = yourBooks.indexOf(firstBook);
                let idxOfSecond = yourBooks.indexOf(secondBook);

                yourBooks[idxOfFirst] = secondBook;
                yourBooks[idxOfSecond] = firstBook;
            }
        } else if (command == 'Insert Book') {
            let bookName = tokens.shift();

            if (!yourBooks.includes(bookName)) {
                yourBooks.push(bookName);
            }
        } else if (command == 'Check Book') {
            let idx = Number(tokens.shift());

            if (idx >= 0 && idx < yourBooks.length) {
                console.log(yourBooks[idx]);
            }
        }
    }

    console.log(yourBooks.join(', '));
}

// schoolLibrary([
//     "Don Quixote&The Great Gatsby&Moby Dick",
//     "Add Book | Ulysses",
//     "Take Book | Don Quixote",
//     "Insert Book | Alice's Adventures in Wonderland",
//     "Done"]);

schoolLibrary([
    "Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"
]);

// schoolLibrary([
//     "War and Peace&Hamlet&Ulysses&Madame Bovary",
//     "Check Book | 2",
//     "Swap Books | Don Quixote | Ulysses",
//     "Done"
// ]);
