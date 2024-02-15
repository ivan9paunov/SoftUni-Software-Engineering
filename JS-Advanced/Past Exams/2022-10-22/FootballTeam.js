class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        const players = {};
        
        for (let player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            playerValue = Number(playerValue);
            age = Number(age);
            players[name] = null;

            const foundPlayer = this.invitedPlayers.find((pl) => pl.name == name);
            
            if (foundPlayer) {
                if (foundPlayer.playerValue < playerValue) {
                    foundPlayer.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name: name, age: age, playerValue: playerValue });
            }
        }

        const printLine = [];
        for (let player in players) {
            printLine.push(player);
        }

        return `You successfully invite ${printLine.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        const foundPlayer = this.invitedPlayers.find((pl) => pl.name == name);

        if (!foundPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (playerOffer < foundPlayer.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${foundPlayer.playerValue - playerOffer} million more are needed to sign the contract!`);
        }

        foundPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const foundPlayer = this.invitedPlayers.find((pl) => pl.name == name);

        if (!foundPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (foundPlayer.age < age) {
            if (age - foundPlayer.age < 5) {
                return `${name} will sign a contract for ${age - foundPlayer.age} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        const printLine = [];
        printLine.push('Players list:');

        for (let player of this.invitedPlayers) {
            printLine.push(`Player ${player.name}-${player.playerValue}`);
        }

        return printLine.join('\n');
    }
}

let fTeam = new footballTeam("Chelsea", "England");
console.log(fTeam.newAdditions(["Kylian Mbappé/25/180", "Victor Osimhen/25/110", "Cristiano Ronaldo/39/15"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());





