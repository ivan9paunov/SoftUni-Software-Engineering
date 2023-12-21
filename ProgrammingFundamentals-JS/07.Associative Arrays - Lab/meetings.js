function meetings(meetingsArr) {
    let appointments = {};

    for (let appointment of meetingsArr) {
        let [day, personName] = appointment.split(' ');

        if (day in appointments) {
            console.log(`Conflict on ${day}!`);
        } else {
            appointments[day] = personName;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [day, personName] of Object.entries(appointments)) {
        console.log(`${day} -> ${personName}`);
    }
}

meetings(
    [
        'Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim'
    ]
);