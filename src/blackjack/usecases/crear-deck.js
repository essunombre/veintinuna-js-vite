import _ from 'underscore';

/**
 * this function creates a new Deck
 * @param {Array<String>} tiposDeCarta Example ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales Example ['A','J','Q','K'];
 * @returns {Array<String>}returns an array with a new deck of cards;
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
    throw new Error('TiposDeCarta is mandatory as a String Array');

    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) 
    throw new Error('TiposEspeciales is mandatory as a String Array');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}