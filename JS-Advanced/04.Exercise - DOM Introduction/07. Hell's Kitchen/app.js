function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let textAreaRef = document.querySelector('textarea').value;
      let restaurantObj = createRestaurantsObj(textAreaRef);
      const bestRestaurantAndSalary = topRestaurant(restaurantObj);
      const [bestRestaurant, averageSalary] = bestRestaurantAndSalary;
      const bestSalary = findTheBestSalary(bestRestaurant, restaurantObj);
      const printEmployees = employeesAndSalaries(bestRestaurant, restaurantObj);
      const printBestRestaurantData = `Name: ${bestRestaurant} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;

      const restaurantRef = document.querySelector("#bestRestaurant > p");
      restaurantRef.textContent = printBestRestaurantData;

      const workersRef = document.querySelector("#workers > p");
      workersRef.textContent = printEmployees;

      function createRestaurantsObj(inputArr) {
         let parsedToArr = JSON.parse(inputArr)
         let restaurants = {};

         for (let line of parsedToArr) {
            let [restaurantName, employees] = line.split(' - ');
            if (!restaurants.hasOwnProperty(restaurantName)) {
               restaurants[restaurantName] = {};
            }

            let employeesArr = employees.split(', ');

            for (let employeeData of employeesArr) {
               let [name, salary] = employeeData.split(' ');
               salary = Number(salary);
               restaurants[restaurantName][name] = salary;
            }
         }

         return restaurants;
      }

      function topRestaurant(restaurantsObj) {
         let restaurantsKVPs = Object.entries(restaurantsObj);
         let restaurantsByAvgSalary = {};

         for (let restaurant of restaurantsKVPs) {
            let [name, workersObj] = restaurant;
            let salaries = Object.values(workersObj);
            let totalSum = 0;

            for (let salary of salaries) {
               totalSum += salary;
            }

            let avgSalary = (totalSum / salaries.length).toFixed(2);
            restaurantsByAvgSalary[name] = avgSalary;
         }

         let bestRestaurantAndAvg = Object.entries(restaurantsByAvgSalary).sort((a, b) => b[1] - a[1]);
         return bestRestaurantAndAvg[0];
      }

      function findTheBestSalary(restaurantName, restaurants) {
         let allSalaries = restaurants[restaurantName];
         let salaryValue = Object.values(allSalaries).sort((a, b) => b - a);
         return salaryValue[0].toFixed(2);
      }


      function employeesAndSalaries(restaurantName, restaurants) {
         let employeesOutput = [];
         let allEmployees = restaurants[restaurantName];
         let employeesData = Object.entries(allEmployees).sort((a, b) => b[1] - a[1]);

         for (let employee of employeesData) {
            let info = '';
            info = `Name: ${employee[0]} With Salary: ${employee[1]}`;
            employeesOutput.push(info);
         }

         return employeesOutput.join(' ');
      }

   }
}