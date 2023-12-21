function employees(inputArr) {
    
    for (let worker of inputArr) {
        let employeesObj = {};
        employeesObj.name = worker;
        employeesObj.id = worker.length;
        console.log(`Name: ${employeesObj.name} -- Personal Number: ${employeesObj.id}`);
    }
}

employees(
    [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'    
    ]
);