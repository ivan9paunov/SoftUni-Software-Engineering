function foodForPets(input) {
    let totalDays = Number(input[0]);
    let totalFood = Number(input[1]);
    let eatenByDog = 0;
    let eatenByCat = 0;
    let biscuits = 0;
    let counter = 2;

    for (let day = 1; day <= totalDays; day++) {
        let dogsFoodByDay = Number(input[counter++]);
        let catsFoodByDay = Number(input[counter++]);
        
        eatenByDog += dogsFoodByDay;
        eatenByCat += catsFoodByDay;
     
        if (day % 3 == 0) {
            let currentBiscuits = (dogsFoodByDay + catsFoodByDay) * 0.10;
            biscuits += currentBiscuits;
        }
    }

    let eatenFood = eatenByDog + eatenByCat;
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${(eatenFood / totalFood * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(eatenByDog / eatenFood * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(eatenByCat / eatenFood * 100).toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3","1000","300","20","100","30","110","40"]);