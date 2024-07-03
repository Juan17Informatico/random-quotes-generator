import { currentValueGlobal } from "../../AuthoresQuotes";
import { getAuthorsById } from "../helpers";
import { authorRender, quotesContainer } from "../logic";


/**
 * 
 * @param {IntegerValue} value Id del author a renderizar, por defecto es 1
 * @returns {IntegerValue} Retorna el valor actual del ID del author que se está renderizando
 */
export const renderAuthorInformation = (value = 1) => {

    const [ author ] = getAuthorsById(value);
    quotesContainer(author.quotes);
    authorRender(author);
    currentValueGlobal.value = value;
    return currentValueGlobal; 
}