function cardGame(inputArr) {
    let playerDeck = {};
    let powerPoints = {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14};
    let typePoints = {S: 4, H: 3, D: 2, C: 1};

    for (let playerInfo of inputArr) {
        let [name, cards] = playerInfo.split(': ');
        let drawnCards = cards.split(', ');
        let checkCards = new Set(drawnCards);
        let cardsInDeck = [];
        checkCards.forEach(card => cardsInDeck.push(card));

        if (!(playerDeck.hasOwnProperty(name))) {
            playerDeck[name] = cardsInDeck;
        } else {
            for (let card of cardsInDeck) {
                if (!(playerDeck[name].includes(card))) {
                    playerDeck[name].push(card);
                }
            }
        } 
    }

    let playerDeckEntries = Object.entries(playerDeck);

    for (let [name, cards] of playerDeckEntries) {
        let playerPoints = 0;

        for (let card of cards) {
            if (card.length == 2) {
                let power = card[0];
                let type = card[1];
                let curPowerPoints = powerPoints[power];
                let curTypePoints = typePoints[type];
                playerPoints += (curPowerPoints * curTypePoints);

            } else {
                let power = card.slice(0, 2);
                let type = card[2];
                let curPowerPoints = powerPoints[power];
                let curTypePoints = typePoints[type];
                playerPoints += (curPowerPoints * curTypePoints);
            }
        }

        console.log(`${name}: ${playerPoints}`);
    }
}

cardGame(
    [
        'Peter: 2C, 4H, 9H, AS, QS',   
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
);