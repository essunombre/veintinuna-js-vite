/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} returns an image 
 */
export const crearCartaHTML = (carta ) => {
    if (  !carta ) throw new Error ('Card is a mandatory argument');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    
    return imgCarta;
}