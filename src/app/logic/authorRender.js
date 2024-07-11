
/**
 * Función que se encarga de construir la información del autor
 * @param {Object} author objeto que contiene información del autor
 */
export const authorRender = (author) => {
    const authorNameText = document.querySelector('.authorNameText'); 
    const authorDescription = document.querySelector('.authorDescription'); 
    const authorDate = document.querySelector('.authorDate'); 

    authorDescription.innerText = author.biography; 
    authorNameText.innerText = author.author; 
    authorDate.innerText = `(${author.birthdate}-${author?.date_death})`; 


}