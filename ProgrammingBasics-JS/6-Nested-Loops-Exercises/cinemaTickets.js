function cinemaTickets(input) {
    let index = 0;
    let command = input[index];

    let totalTickets = 0;
    let totalStandardTickets = 0;
    let totalStudentTickets = 0;
    let totalKidsTickets = 0;
     
    while (command !== "Finish") {
        let movieName = command;
        index++;
        let availableSeats = Number(input[index]);
        index++;

        let movieTickets = 0;

        let ticketType = input[index];
        while (ticketType !== "End") {
            
            movieTickets++;

            if (ticketType === "standard") {
                totalStandardTickets++;
            } else if (ticketType === "student") {
                totalStudentTickets++;
            } else if (ticketType === "kid") {
                totalKidsTickets++;
            } 
            
            if(movieTickets >= availableSeats) {
                break;
            }

            index++;
            ticketType = input[index];
        }
        
        totalTickets += movieTickets;

        console.log(`${movieName} - ${((movieTickets / availableSeats) * 100).toFixed(2)}% full.`);
        
        index++;
        command = input[index];
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(totalStudentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKidsTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

// cinemaTickets(["Taxi","10","standard","kid","student","student","standard","standard","End",
            //    "Scary Movie","6","student","student","student","student","student","student","Finish"]);
// cinemaTickets(["The Matrix","20","student","standard","kid","kid","student","student","standard","student","End",
//                "The Green Mile","17","student","standard","standard","student","standard","student","End",
//                "Amadeus","3","standard","standard","standard","Finish"]);
cinemaTickets(["Shutter Island","9","standard","standard","standard","student","student","student","kid","kid","kid",
               "Rush","9","standard","standard","standard","student","student","student","kid","kid","kid",
               "Deadpool","9","standard","standard","standard","student","student","student","kid","kid","kid","Finish"]);