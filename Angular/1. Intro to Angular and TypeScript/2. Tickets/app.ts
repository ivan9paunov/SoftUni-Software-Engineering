function tickets(destinations: string[], criteria: string): void {
    class Ticket {
        destination: string;
        price: number;
        status: string;

        constructor(destination: string, price: number, status: string) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let allTickets: Ticket[] = [];

    destinations.forEach(destination => {
        let [destinationName, price, status] = destination.split('|');
        const ticket = new Ticket(destinationName, Number(price), status);
        allTickets.push(ticket);
    });

    allTickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));

    console.log(allTickets);
}

tickets([
    'Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'

], 'destination');

// tickets([
//     'Philadelphia|94.20|available',

//     'New York City|95.99|available',

//     'New York City|95.99|sold',

//     'Boston|126.20|departed'

// ], 'status');