function inventory(inputArr) {
    let heroesArr = [];

    for (let heroe of inputArr) {
        let [heroName, heroLevel, items] = heroe.split(' / ');
        let heroes = { Hero: heroName, level: heroLevel, Items: items };
        
        heroesArr.push(heroes);
    }

    heroesArr.sort((a, b) => a.level - b.level);

    for (let heroe of heroesArr) {
        console.log(`Hero: ${heroe.Hero}\nlevel => ${heroe.level}\nitems => ${heroe.Items}`);
        
    }
}

inventory(
    [
        'Isacc / 25 / Apple, GravityGun',   
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);