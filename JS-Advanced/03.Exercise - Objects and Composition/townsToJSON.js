function townsToJSON(townsArr) {
    const townsInfo = [];

    for (let i = 1; i < townsArr.length; i++) {
        let townData = townsArr[i].split('|')
            .filter(el => el.length > 0)
            .map(el => el.trim());
            
        let [town, latitude, longitude] = townData;
        latitude = Number(latitude).toFixed(2);
        latitude = Number(latitude);
        longitude = Number(longitude).toFixed(2);
        longitude = Number(longitude);
        
        const townInfo = {};
        townInfo['Town'] = town;
        townInfo['Latitude'] = latitude;
        townInfo['Longitude'] = longitude;

        townsInfo.push(townInfo);
    }

    console.log(JSON.stringify((townsInfo)));
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);