class Company {
    departments = {};

    addEmployee(name, salary, position, department) {
        salary = Number(salary);

        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = { 
                employees: [], 
                totalSalary: 0, 
                avgSalary: 0 
            };
        }

        this.departments[department].employees.push([name, salary, position]);
        this.departments[department].totalSalary += salary; 
        this.departments[department].avgSalary = this.departments[department].totalSalary / Object.keys(this.departments[department].employees).length; 

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let dataToPrint = [];
        let sortedDepartments = Object.entries(this.departments).sort((a, b) => b[1].avgSalary - a[1].avgSalary);
        let bestDepartment = sortedDepartments[0];
        dataToPrint.push(`Best Department is: ${bestDepartment[0]}`);
        dataToPrint.push(`Average salary: ${bestDepartment[1].avgSalary.toFixed(2)}`);

        let sortedEmployees = Object.values(bestDepartment[1].employees).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let employee of sortedEmployees) {
            dataToPrint.push(`${employee[0]} ${employee[1]} ${employee[2]}`);
        }
        return dataToPrint.join('\n');
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());