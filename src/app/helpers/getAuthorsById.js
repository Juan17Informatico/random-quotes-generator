import { AuthorsQuotes } from "../../data/AuthorsQuotes"


export const getAuthorsById = ( id ) => {

    return AuthorsQuotes.filter(authors => authors.id === id); 

}