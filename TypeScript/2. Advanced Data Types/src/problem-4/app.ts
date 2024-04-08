const towns = (arr: string[]): void => {
    type TownsData = {
        town: string,
        latitude: number,
        longitude: number
    }

    let townsCatalog: object[] = [];

    for (let town of arr) {
        const [name, lat, lon] = town.split(' | ');
        const latitude: number = Number(Number(lat).toFixed(2));
        const longitude: number = Number(Number(lon).toFixed(2));

        const townData: TownsData = {
            town: name,
            latitude: latitude,
            longitude: longitude
        }

        townsCatalog.push(townData);
    }

    for (const town of townsCatalog) {
        console.log(town);
    }
}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);

