function legendaryFarming(string) {
    let materials = string.split(' ');
    let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    let junkMaterials = {};

    let legendaries = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };

    for (let item = 0; item < materials.length; item += 2) {
        let qty = Number(materials[item]);
        let material = materials[item + 1].toLowerCase();

        if (material in keyMaterials) {
            keyMaterials[material] += qty;
            if (keyMaterials[material] >= 250) {
                keyMaterials[material] -= 250;
                console.log(`${legendaries[material]} obtained!`);
                break;
            }
        } else {
            if (material in junkMaterials) {
                junkMaterials[material] += qty;
            } else {
                junkMaterials[material] = qty;
            }
        }
    }

    let kvpKeyMaterials = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    kvpKeyMaterials.forEach(element => console.log(`${element[0]}: ${element[1]}`));

    let kvpJunkMaterials = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));
    kvpJunkMaterials.forEach(element => console.log(`${element[0]}: ${element[1]}`));
}

legendaryFarming(
    '3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
);

// legendaryFarming(
//     '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
// );