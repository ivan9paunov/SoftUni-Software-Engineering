class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        const findBook = this.books.find((book) => book.title == title);

        if (!findBook) {
            this.books.push({ title: title, author: author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        } else {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }
    }

    addMember(memberName) {
        const findMember = this.members.find((member) => member.memberName == memberName);

        if (!findMember) {
            this.members.push({ memberName: memberName});
            return `Member ${memberName} has been joined to the book club.`;
        } else {
            return `Member ${memberName} is already a part of the book club.`;
        }
    }

    assignBookToMember(memberName, bookTitle) {
        const findMember = this.members.find((member) => member.memberName == memberName);

        if (!findMember) {
            throw new Error(`Member ${memberName} not found.`);
        }

        const findBook = this.books.find((book) => book.title == bookTitle);

        if (!findBook) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        const idx = this.books.indexOf(findBook);
        this.books.splice(idx, 1);
        return `Member ${memberName} has been assigned the book "${findBook.title}" by ${findBook.author}.`;
    }

    generateReadingReport() {
        if (this.members.length == 0) {
            return "No members in the book club.";
        }

        if (this.books.length == 0) {
            return "No available books in the library.";
        }

        const printLine = [];
        printLine.push(`Available Books in ${this.library} library:`);

        for (let book of this.books) {
            printLine.push(`"${book.title}" by ${book.author}`);
        }

        return printLine.join('\n');
    }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());

