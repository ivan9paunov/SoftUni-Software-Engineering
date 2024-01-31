function filterEmployees(employeesInput, criteria) {
    const employees = JSON.parse(employeesInput);
    const [key, value] = criteria.split('-');
    let counter = 0;

    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];

        if (key == 'all') {
            console.log(`${i}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        } else {
            if (employee[key] == value) {
                console.log(`${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
                counter++;
            }
        }
    }
}

filterEmployees(
    `[
        {
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
        }, 

        {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
        },
        
        {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
        }
    ]`,
        
    'gender-Female'
);