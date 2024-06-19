import { currentValueGlobal } from "../../AuthoresQuotes";
import { getAuthorsById } from "../helpers";
import { quotesContainer } from "../views";
import { authorRender } from "./authorRender";

export const renderAuthorInformation = (value = 1) => {

    const [ author ] = getAuthorsById(value);
    quotesContainer(author.quotes);
    authorRender(author);
    currentValueGlobal.value = value;
    return currentValueGlobal; 
}