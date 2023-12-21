function netherRealms(command) {
    let demons = command.split(/[, ]/);

    let healthPattern = /[^0-9+\-*/.]/gm;
    let damagePattern = /[\+-]*\d+[.\d+]*/gm;
    let multiDivPattern = /[*/]/gm;

    let demonsObj = {};

    for (let demon of demons) {
        let healthMatch = demon.match(healthPattern);

        if (healthMatch) {
            let health = 0;

            for (let char of healthMatch) {
                let charNum = char.charCodeAt();
                health += charNum;
            }

            let damageMatch = demon.match(damagePattern);
            let damage = 0;

            if (damageMatch) {
                
                damageMatch = damageMatch.map(Number);
                damage = damageMatch.reduce((acc, val) => acc + val, 0);
                let multiDivMatch = demon.match(multiDivPattern);
    
                if (multiDivMatch) {
                    for (let symbol of multiDivMatch) {
                        if (symbol == '*') {
                            damage *= 2;
                        } else if (symbol == '/') {
                            damage /= 2;
                        }
                    }
                }
            }

            demonsObj[demon] = {health, damage};
        }
    }

    let sortedDemons = Object.entries(demonsObj).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let demon of sortedDemons) {
        let name = demon.shift();
        let { health, damage } = demon.shift();

        console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
    }

}

// netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
// netherRealms('m15*/c-5.0');