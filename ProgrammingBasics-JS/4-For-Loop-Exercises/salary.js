function salary(input){
    let openedTabs = Number(input[0]);
    let salary =  Number(input[1]);
    for(let i = 2; i < input.length; i++){
        let website = input[i];
        switch(website){
            case "Facebook" : salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit"   : salary -=  50; break;
        }
        if(salary <= 0){
            console.log("You have lost your salary.");
            break;
        }
    }
    if(salary > 0) {
        console.log(Math.floor(salary));
    }
}

salary(["10","100","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);