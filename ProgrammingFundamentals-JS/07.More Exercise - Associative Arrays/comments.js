function comments(inputArr) {
    let users = [];
    let articles = {};

    for (let inputLine of inputArr) {
        if (inputLine.includes('user')) {
            let [definition, name] = inputLine.split(' ');
            users.push(name);

        } else if (inputLine.includes('article')) {
            let tokens = inputLine.split(' ');
            let definition = tokens.shift();
            let article = tokens.join(' ');
            articles[article] = [];

        } else if (inputLine.includes('posts on')) {
            let [tokens, contribution] = inputLine.split(': ');
            let [username, article] = tokens.split(' posts on ');
            contribution = contribution.split(', ');
            let title;
            let comment;
            if (contribution.length > 1) {
                [title, comment] = contribution;
            } else {
                continue;
            }

            if (users.includes(username) && articles.hasOwnProperty(article)) {
                articles[article].push([username, title, comment]);
            }
        }
    }

    let articlesValues = Object.entries(articles).sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length);

    for (let article of articlesValues) {
        let [articleName, users] = article;
        console.log(`Comments on ${articleName}`);
        
        let sortedUsers = users.sort((a, b) => a[0].localeCompare(b[0]));
        
        for (let user of sortedUsers) {
            let [username, title, comment] = user;
            console.log(`--- From user ${username}: ${title} - ${comment}`);
        }
    }
}

comments([
    'user aUser123', 
    'someUser posts on someArticle: NoTitle, stupidComment', 
    'article Books',
    'article Movies', 
    'article Shopping', 
    'user someUser', 
    'user uSeR4', 
    'user lastUser', 
    'uSeR4 posts on Books: I like books, I do really like them', 
    'uSeR4 posts on Movies: I also like movies, I really do', 
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);

// comments([
//     'user Mark', 
//     'Mark posts on someArticle: NoTitle, stupidComment', 
//     'article Bobby',
//     'article Steven', 
//     'user Liam', 
//     'user Henry', 
//     'Mark posts on Bobby: Is, I do really like them', 
//     'Mark posts on Steven: title, Run', 
//     'someUser posts on Movies: Like'
// ]);