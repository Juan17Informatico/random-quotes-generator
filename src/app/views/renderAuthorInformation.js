import { currentValueGlobal } from "../../AuthoresQuotes";
import { getAuthorsById } from "../helpers";
import { authorRender, quotesContainer } from "../logic";


export const renderAuthorInformation = (value = 1) => {

    const [ author ] = getAuthorsById(value);
    quotesContainer(author.quotes);
    authorRender(author);
    currentValueGlobal.value = value;
    return currentValueGlobal; 
}