function tickets(destinations, criteria) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let destinationData of destinations) {
        let [destinationName, price, status] = destinationData.split('|');
        price = Number(price);

        let ticket = new Ticket(destinationName, price, status);
        tickets.push(ticket);
    }

    if (criteria == 'price') {
        tickets.sort((a, b) => a[criteria] - b[criteria]);
    } else {
        tickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }

    return tickets;
}

tickets(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],

    'destination'
);

// tickets(
//     ['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],

//     'status'
// );