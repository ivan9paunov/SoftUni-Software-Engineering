interface EmployeesModel {
    name: string;
    salary: number;
    email: string;
    age: number;
}

type DepartmentModel = {
    averageSalary: number;
    totalSalary: number;
    employees: EmployeesModel[];
}

type Departments = {
    [name: string]: DepartmentModel;
}

class Employee implements EmployeesModel {
    name: string;
    salary: number;
    position: string;
    department: string;
    email: string;
    age: number;

    constructor(name: string, salary: number, position: string, department: string, email: string, age: number) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
}

class Department {
    private departments: Departments = {};

    addEmployee(employee: Employee): void {
        if (!this.departments.hasOwnProperty(employee.department)) {
            this.departments[employee.department] = { employees: [], totalSalary: 0, averageSalary: 0 };
        }

        this.departments[employee.department].employees.push({ name: employee.name, salary: employee.salary, email: employee.email, age: employee.age });
        this.departments[employee.department].totalSalary += employee.salary;
        this.departments[employee.department].averageSalary = this.departments[employee.department].totalSalary / this.departments[employee.department].employees.length;
    }

    private sortDepartments(): [string, DepartmentModel] {
        const departmentKVPs = Object.entries(this.departments);
        departmentKVPs.sort((a, b) => b[1].averageSalary - a[1].averageSalary);
        const bestDepartment = departmentKVPs[0];
        return bestDepartment;
    }

    getHighestAvgSalary(): void {
        const bestDepartment = this.sortDepartments();
        const departmentName: string = bestDepartment[0];
        console.log(`Highest Average Salary: ${departmentName}`);
    }

    getBestEmployees(): void {
        const bestDepartment = this.sortDepartments();
        const employees = bestDepartment[1].employees;
        employees.sort((a, b) => b.salary - a.salary);
        
        employees.forEach(employee => console.log(`${employee.name} ${(employee.salary).toFixed(2)} ${employee.email} ${employee.age}`));
    }
}

function companyRoster(inputArray: string[]): void {
    const employees: number = Number(inputArray.shift());
    const pattern: RegExp = /^\w+@[a-z]+\.[a-z]+$/;

    const myDepartments = new Department();

    for (const person of inputArray) {
        let [name, salaryAsStr, position, department, email, ageAsStr] = person.split(' ');
        const salary: number = Number(salaryAsStr);
        let age: number;

        if (email != undefined && !pattern.test(email)) {
            ageAsStr = email;
            email = 'n/a';
        } else if (email == undefined) {
            email = 'n/a';
        }

        if (ageAsStr == undefined) {
            age = -1;
        } else {
            age = Number(ageAsStr);
        }

        const employee = new Employee(name, salary, position, department, email, age);
        myDepartments.addEmployee(employee);
    }

    myDepartments.getHighestAvgSalary();
    myDepartments.getBestEmployees();
}

companyRoster([
    '4',
    'Peter 120.00 Dev Development peter@abv.bg 28',
    'Tina 333.33 Manager Marketing 33',
    'Sam 840.20 ProjectLeader Development sam@sam.com',
    'George 0.20 Freeloader Nowhere 18'
]);

console.log('---');

companyRoster([
    '6',
    'Silver 496.37 Temp Coding silver@yahoo.com',
    'Sam 610.13 Manager Sales',
    'John 609.99 Manager Sales john@abv.bg 44',
    'Venci 0.02 Director BeerDrinking beer@beer.br 23',
    'Andre 700.00 Director Coding',
    'Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey'
]);