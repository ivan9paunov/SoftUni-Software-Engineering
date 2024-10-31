function tickets(destinations, criteria) {
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        return Ticket;
    }());
    var allTickets = [];
    destinations.forEach(function (destination) {
        var _a = destination.split('|'), destinationName = _a[0], price = _a[1], status = _a[2];
        var ticket = new Ticket(destinationName, Number(price), status);
        allTickets.push(ticket);
    });
    allTickets.sort(function (a, b) { return a[criteria].localeCompare(b[criteria]); });
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
