"use strict";
class Employee {
    constructor(name, salary, position, department, email, age) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
}
class Department {
    constructor() {
        this.departments = {};
    }
    addEmployee(department, name, salary, email, age) {
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = { employees: [], totalSalary: 0, averageSalary: 0 };
        }
        this.departments[department].employees.push({ name: name, salary: salary, email: email, age: age });
        this.departments[department].totalSalary += salary;
        this.departments[department].averageSalary = this.departments[department].totalSalary / this.departments[department].employees.length;
    }
    sortDepartments() {
        const departmentKVPs = Object.entries(this.departments);
        departmentKVPs.sort((a, b) => b[1].averageSalary - a[1].averageSalary);
        const bestDepartment = departmentKVPs[0];
        return bestDepartment;
    }
    getHighestAvgSalary() {
        const bestDepartment = this.sortDepartments();
        const departmentName = bestDepartment[0];
        console.log(`Highest Average Salary: ${departmentName}`);
    }
    getBestEmployees() {
        const bestDepartment = this.sortDepartments();
        const employees = bestDepartment[1].employees;
        employees.sort((a, b) => b.salary - a.salary);
        employees.forEach(employee => console.log(`${employee.name} ${(employee.salary).toFixed(2)} ${employee.email} ${employee.age}`));
    }
}
function companyRoster(inputArray) {
    const employees = Number(inputArray.shift());
    const pattern = /^\w+@[a-z]+\.[a-z]+$/;
    const myDepartments = new Department();
    for (const person of inputArray) {
        let [name, salaryAsStr, position, department, email, ageAsStr] = person.split(' ');
        const salary = Number(salaryAsStr);
        let age;
        if (email != undefined && !pattern.test(email)) {
            ageAsStr = email;
            email = 'n/a';
        }
        else if (email == undefined) {
            email = 'n/a';
        }
        if (ageAsStr == undefined) {
            age = -1;
        }
        else {
            age = Number(ageAsStr);
        }
        const employee = new Employee(name, salary, position, department, email, age);
        myDepartments.addEmployee(employee.department, employee.name, employee.salary, employee.email, employee.age);
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
