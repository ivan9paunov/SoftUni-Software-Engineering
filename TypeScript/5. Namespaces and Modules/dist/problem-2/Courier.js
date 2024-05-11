"use strict";
/// <reference path="namespace.ts"/>
class Courier {
    constructor(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        const customerExist = this.placesToVisit.find(customer => customer.customerName == customerName);
        if (customerExist) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        this.placesToVisit.push({ customerName: customerName, visited: visited });
        return `${customerName} just became your client.`;
    }
    visitCustomer(customerName) {
        const customerExist = this.placesToVisit.find(customer => customer.customerName == customerName);
        if (!customerExist) {
            throw new Error(`${customerName} is not your customer`);
        }
        customerExist.visited = true;
    }
    showCustomers() {
        const customers = [];
        for (const customer of this.placesToVisit) {
            customers.push(`${customer.customerName} -> ${customer.visited}`);
        }
        return customers.join('\n');
    }
}
let courier = new Courier([{ customerName: 'DHL', visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
