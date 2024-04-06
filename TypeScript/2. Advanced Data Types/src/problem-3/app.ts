function inventory(heroes: string[]): void {
    type Heroe = {
        Hero: string;
        level: number;
        items?: string
    }

    let heroesRegister: Heroe[] = [];

    for (let heroe of heroes) {
        let [name, lev, heroeItems] = heroe.split(' / ');
        const level = Number(lev);

        const hero: Heroe = {
            Hero: name,
            level: level, 
        }

        if (heroeItems) {
            hero.items = heroeItems;
        }

        heroesRegister.push(hero);
    }

    heroesRegister.sort((a, b) => a.level - b.level);
    
    for (const heroe of heroesRegister) {
        const [name, level, items] = Object.values(heroe);

        console.log(`Hero: ${name}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'    
]);