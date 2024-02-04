function printDeckOfCards(cards) {
    let deck = [];

    for (let cardSymbols of cards) {
        let card = playingCards(cardSymbols);

        if (!card.toString().includes('Invalid')) {
            deck.push(card.toString());
        } else {
            return console.log(card.toString());
        }
    }

    console.log(deck.join(' '));

    function playingCards(card) {
        let tokens = card.split('');
        let face = '';
        let suit = '';

        if (tokens.length > 2) {
            suit = tokens.pop();
            face = tokens.join('');
        } else {
            [face, suit] = tokens;
        }

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663' };
    
        if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
            return `Invalid card: ${card}`;
        }
    
        return {
            face,
            suit: suits[suit],
            toString() {
                if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
                    return `Invalid card: ${card}`;
                } else {
                    return `${this.face}${this.suit}`;
                }
            }
        }
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);