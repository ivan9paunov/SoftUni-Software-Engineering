function truckDriver(input){
    let season = input[0];
    let kilometers = Number(input[1]);
    let work = 4; //months
    let salary = 0;
    let taxes = 0;
    if(kilometers <= 5000){
        switch (season) {
            case "Spring":
            case "Autumn": salary = kilometers * 0.75; break;        
            case "Summer": salary = kilometers * 0.90; break;
            case "Winter": salary = kilometers * 1.05; break;
        }
    } else if(kilometers <= 10000){
        switch (season) {
            case "Spring":
            case "Autumn": salary = kilometers * 0.95; break;        
            case "Summer": salary = kilometers * 1.10; break;
            case "Winter": salary = kilometers * 1.25; break;
        }
    } else if(kilometers <= 20000){
        switch (season) {
            case "Spring":
            case "Summer": 
            case "Autumn":         
            case "Winter": salary = kilometers * 1.45; break;
        }
    }
    
    taxes = salary * 0.10;
    console.log(((salary - taxes) * work).toFixed(2));
}

truckDriver(["Summer","3455"]);