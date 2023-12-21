function movies(movieArr) {
    let movieCatalog = [];

    for (let movieCommand of movieArr) {

        if (movieCommand.includes('addMovie')) {
            let movieName = movieCommand.split('addMovie ')[1];
            let movieObj = { name: movieName};
            movieCatalog.push(movieObj);

        } else if (movieCommand.includes('directedBy')) {
            let [movieName, directorName] = movieCommand.split(' directedBy ');

            let movie = movieCatalog.find(movie => movie.name == movieName);

            if (movie) {
                movie.director = directorName;
            }

        } else if (movieCommand.includes('onDate')) {
            let [movieName, onDate] = movieCommand.split(' onDate ');

            let movie = movieCatalog.find(movie => movie.name == movieName);

            if (movie) {
                movie.date = onDate;
            }
        }
    }

    for (let movie of movieCatalog) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies(
    [
        'addMovie Fast and Furious',   
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ] 
);