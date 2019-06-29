function solve(ticketArray, sortingCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (const ticket of ticketArray) {

        let [destination, price, status] = ticket.split('|');
        price = Number(price);

        tickets.push(new Ticket(destination, price, status));
    }
   
    switch (sortingCriteria) {
        case 'destination':

            tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;

        case 'price':
            tickets = tickets.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return tickets;    
}

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
);