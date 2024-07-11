import { AuthorsQuotes } from "../../data/AuthorsQuotes"

/**
 * 
 * @param {Number} recibe el ID de un autor
 * @returns {Object} Retorna el objeto con la información de un autor
 */
export const getAuthorsById = ( id ) => {

    return AuthorsQuotes.filter(authors => authors.id === id); 

}