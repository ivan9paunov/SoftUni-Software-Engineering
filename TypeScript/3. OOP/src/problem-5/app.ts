class Employee {
    name: string;
    salary: number;
    position: string;
    department: string;
    email?: string;
    age?: number;

    constructor(name: string, salary: number, position: string, department: string, email?: string, age?: number) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
}

class Department {

}

function companyRoster(inputArray: string[]): void {
    const employees: number = Number(inputArray.shift());
    const pattern = /^\w+@[a-z]+\.[a-z]+$/;

    for (const employee of inputArray) {
        const [name, salary, position, department, email, age] = employee.split(' ');
    }
}

companyRoster([
    '4',
    'Peter 120.00 Dev Development peter@abv.bg 28',
    'Tina 333.33 Manager Marketing 33',
    'Sam 840.20 ProjectLeader Development sam@sam.com',
    'George 0.20 Freeloader Nowhere 18'
]);