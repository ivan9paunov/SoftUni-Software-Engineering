function extractEmails(text) {
    let pattern = /(?<=\s)([a-z0-9]+[\._-]?\w+@([a-z]+(-?[a-z]+(\.[a-z]+)+)+))(\b|(?=\s))/gmi;

    let matches = text.match(pattern);

    for (let match of matches) {
        console.log(match);
    }
}

extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information');