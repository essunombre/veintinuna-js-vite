/**
 * this function returns a deck from the shuffled deck
 * @param {Array<String>} deck is a string array
 * @returns {String} returns a card from the deck
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}