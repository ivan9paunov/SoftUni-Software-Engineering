function playingCards(card, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663' };

    if (!faces.includes(card) || !suits.hasOwnProperty(suit)) {
            throw new Error('Error');
    }

    return {
        card,
        suit: suits[suit],
        toString() {
            return `${this.card}${this.suit}`;
        }
    }
}

let card = playingCards('10', 'C');
console.log(card.toString());