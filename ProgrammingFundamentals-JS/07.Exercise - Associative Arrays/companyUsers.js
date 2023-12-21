function companyUsers(inputArr) {
    let users = {};

    for (let userInfo of inputArr) {
        let [user, id] = userInfo.split(' -> ');

        if (!(users.hasOwnProperty(user))) {
            users[user] = [id];
        } else {
            if (!(users[user].includes(id))) {
                users[user].push(id);
            }
        }
    }

    let usersEntries = Object.entries(users).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [user, ids] of usersEntries) {
        console.log(user);
        for (let id of ids) {
            console.log(`-- ${id}`);
        }
    }
}

companyUsers(
    [ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]
);

// companyUsers(
//     [ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ]
// );