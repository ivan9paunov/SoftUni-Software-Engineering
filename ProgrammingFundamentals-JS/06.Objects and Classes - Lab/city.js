function city(city) {

    let keys = Object.keys(city);
    
    for (let key of keys) {
        console.log(`${key} -> ${city[key]}`);
    }
}

city(
    {
        name: "Plovdiv",   
        area: 389,        
        population: 1162358,
        country: "Bulgaria",
        postCode: "4000"
        }
);