function buildAWall(arr) {
    let wall = arr.map(Number);
    let isDone = false;
    let dailyConcrete = [];

    while (isDone != true) {
        let concrete = 0;

        for (let section = 0; section < wall.length; section++) {
            let curSection = wall[section];
        if (curSection < 30) {
            curSection++;
            wall.splice(section, 1, curSection);
            concrete += 195;
        }

        isDone = wall.every(element => {
            if (element == 30) {
                return true;
            } else {
                return false;
            }
        });

        }

        dailyConcrete.push(concrete);
    }
    
    let sum = 0;
    dailyConcrete.forEach((element) => sum += element);
    let totalMoney = sum * 1900;
    
    console.log(dailyConcrete.join(', '));
    console.log(`${totalMoney} pesos`);
}

buildAWall([21, 25, 28]);