import { getAuthorsById } from "./helpers/getAuthorsById";
import { authorRender } from "./logic/authorRender";
import { quotesContainer } from "./views/quotesContainer";


export const AppQuotes = (id) => {

    const [ author ] = getAuthorsById(id);

    quotesContainer(author.quotes);
    authorRender(author);
}