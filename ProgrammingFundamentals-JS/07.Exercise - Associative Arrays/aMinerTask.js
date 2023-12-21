function aMinerTask(inputArr) {
    let resources = {};

    for (let resourceInfo = 0; resourceInfo < inputArr.length; resourceInfo += 2) {
        let resourceName = inputArr[resourceInfo];
        let quantity = Number(inputArr[resourceInfo + 1]);
        
        if (!(resources.hasOwnProperty(resourceName))) {
            resources[resourceName] = quantity;
        } else {
            resources[resourceName] += quantity;
        }
    }

    let kvpResources = Object.entries(resources);
    kvpResources.forEach(resource => console.log(`${resource[0]} -> ${resource[1]}`));
}

aMinerTask(
    [
        'Gold',   
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ]
);

// aMinerTask(
//     [
//         'gold',   
//         '155',
//         'silver',
//         '10',
//         'copper',
//         '17',
//         'gold',
//         '15'
//     ]
// );