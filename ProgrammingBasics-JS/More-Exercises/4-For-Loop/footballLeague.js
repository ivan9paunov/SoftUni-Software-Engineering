function footballLeague(input){
    let stadiumCapacity = Number(input[0]);
    let totalSupporters = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let supporterSector = 2; supporterSector <= totalSupporters + 1; supporterSector++) {
        let currentSupporter = input[supporterSector];
        switch (currentSupporter) {
            case "A": sectorA++; break;
            case "B": sectorB++; break;
            case "V": sectorV++; break;
            case "G": sectorG++; break;
        }
    }
    console.log(`${(sectorA / totalSupporters * 100).toFixed(2)}%`);
    console.log(`${(sectorB / totalSupporters * 100).toFixed(2)}%`);
    console.log(`${(sectorV / totalSupporters * 100).toFixed(2)}%`);
    console.log(`${(sectorG / totalSupporters * 100).toFixed(2)}%`);
    console.log(`${(totalSupporters / stadiumCapacity * 100).toFixed(2)}%`);
}

footballLeague(["76","10","A","V","V","V","G","B","A","V","B","B"]);