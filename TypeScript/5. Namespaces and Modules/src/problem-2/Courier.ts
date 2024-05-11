/// <reference path="namespace.ts"/>

type Customer = {
    customerName: string;
    visited: boolean;
}

class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit: Customer[];

    constructor(placesToVisit: Customer[]) {
        this.placesToVisit = placesToVisit;
    }

    newCustomer(customerName: string, visited: boolean = false): string {
        const customerExist: Customer | undefined = this.placesToVisit.find(customer => customer.customerName == customerName);
        
        if (customerExist) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }

        this.placesToVisit.push({ customerName: customerName, visited: visited });

        return `${customerName} just became your client.`;
    }

    visitCustomer(customerName: string): void {
        const customerExist: Customer | undefined = this.placesToVisit.find(customer => customer.customerName == customerName);

        if (!customerExist) {
            throw new Error(`${customerName} is not your customer`);
        }

        customerExist.visited = true;
    }

    showCustomers(): string {
        const customers: string[] = [];

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