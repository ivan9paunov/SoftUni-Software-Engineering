function softUniStudents(inputArr) {
    let courses = {};

    for (let command of inputArr) {
        if (command.includes(' joins ')) {
            let [nameAndCredits, mailAndCourse] = command.split('] with email ');
            let [username, credits] = nameAndCredits.split('[');
            credits = Number(credits);
            let [email, course] = mailAndCourse.split(' joins ');
            
            if (courses.hasOwnProperty(course)) {
                if (courses[course].places > 0) {
                        courses[course].users.push([username, credits, email]);
                        courses[course].places -= 1;
                }
            }

        } else {
            let [course, availablePlaces] = command.split(': ');
            availablePlaces = Number(availablePlaces);
            
            if (!courses.hasOwnProperty(course)) {
                courses[course] = {};
                courses[course]['places'] = availablePlaces;
                courses[course]['users'] = [];
            } else {
                courses[course].places += availablePlaces;
            }
        }
    }

    let coursesKVPs = Object.entries(courses).sort((a, b) => Object.keys(Object.values(b[1])[1]).length - Object.keys(Object.values(a[1])[1]).length);
    
    for (let entry of coursesKVPs) {
        let [courseName, courseInfo] = entry;
        let courseValues = Object.values(courseInfo);
        let [placesLeft, users] = courseValues;
        console.log(`${courseName}: ${placesLeft} places left`);
        users.sort((a, b) => b[1] - a[1]);
        
        for (let userEntry of users) {
            let [username, credits, email] = userEntry;
            console.log(`--- ${credits}: ${username}, ${email}`);
        }
    }
}

softUniStudents([
    'JavaBasics: 2', 
    'user1[25] with email user1@user.com joins C#Basics', 
    'C#Advanced: 3', 
    'JSCore: 4', 
    'user2[30] with email user2@user.com joins C#Basics', 
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore', 
    'user8[18] with email user8@user.com joins C#Advanced', 
    'user6[85] with email user6@user.com joins JSCore', 
    'JSCore: 2', 
    'user11[3] with email user11@user.com joins JavaBasics', 
    'user45[105] with email user45@user.com joins JSCore', 
    'user007[20] with email user007@user.com joins JSCore', 
    'user700[29] with email user700@user.com joins JSCore', 
    'user900[88] with email user900@user.com joins JSCore'
]);

// softUniStudents([
//     'JavaBasics: 15',
//     'user1[26] with email user1@user.com joins JavaBasics',
//     'user2[36] with email user11@user.com joins JavaBasics',
//     'JavaBasics: 5',
//     'C#Advanced: 5',
//     'user1[26] with email user1@user.com joins C#Advanced',
//     'user2[36] with email user11@user.com joins C#Advanced',
//     'user3[6] with email user3@user.com joins C#Advanced',
//     'C#Advanced: 1',
//     'JSCore: 8',
//     'user23[62] with email user23@user.com joins JSCore'
// ]);