function trekkingMania(input) {
    let numberOfGroups = Number(input[0]);
    let totalPeople = 0;
    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let group = 1; group <= numberOfGroups; group++) {
        let currentGroup = Number(input[group]);
        totalPeople += currentGroup;
        if (currentGroup < 6) {
            musala += currentGroup;
        } else if (currentGroup < 13) {
            montblanc += currentGroup;
        } else if (currentGroup < 26) {
            kilimanjaro += currentGroup;
        } else if (currentGroup < 41) {
            k2 += currentGroup;
        } else {
            everest += currentGroup;
        }
    }
    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(montblanc / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}

trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"]);