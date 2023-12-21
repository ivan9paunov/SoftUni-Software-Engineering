function schoolCamp(input){
    let season = input[0];
    let groupType = input[1];
    let numberOfStudents = input[2];
    let overnightStays = input[3];
    let price = 0;
    let sport = "";
    switch(season){
        case "Winter":
            switch(groupType){
                case "boys" : 
                case "girls": price = numberOfStudents * overnightStays * 9.60; break;
                case "mixed": price = numberOfStudents * overnightStays * 10.00; break;
            }
        break;
        case "Spring":
            switch(groupType){
                case "boys" : 
                case "girls": price = numberOfStudents * overnightStays * 7.20; break;
                case "mixed": price = numberOfStudents * overnightStays * 9.50; break;
            }
        break;
        case "Summer":
            switch(groupType){
                case "boys" : 
                case "girls": price = numberOfStudents * overnightStays * 15.00; break;
                case "mixed": price = numberOfStudents * overnightStays * 20.00; break;
            }
        break;
    }

    if(numberOfStudents >=50 ){
        price = price * 0.50;
    } else if(numberOfStudents >= 20){
        price = price * 0.85;
    } else if(numberOfStudents >= 10){
        price = price * 0.95;
    }

    switch(season){
        case "Winter":
            switch(groupType){
                case "boys" : sport = "Judo"; break;
                case "girls": sport = "Gymnastics"; break;
                case "mixed": sport = "Ski"; break;
            }
        break;
        case "Spring":
            switch(groupType){
                case "boys" : sport = "Tennis"; break;
                case "girls": sport = "Athletics"; break;
                case "mixed": sport = "Cycling"; break;
            }
        break;
        case "Summer":
            switch(groupType){
                case "boys" : sport = "Football"; break;
                case "girls": sport = "Volleyball"; break;
                case "mixed": sport = "Swimming"; break;
            }
        break;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);
}

schoolCamp(["Spring","girls","20","7"]);