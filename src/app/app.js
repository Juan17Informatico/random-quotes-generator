import { getAuthorsById } from "./helpers/getAuthorsById";
import { btnFollow } from "./listeners/btnFollow";
import { authorRender } from "./logic/authorRender";
import { quotesContainer } from "./views/quotesContainer";

const initialValue = 1; 

export const AppQuotes = () => {

    const btnFollowElement = document.querySelector("#btnFollow"); 
    const btnFormerElement = document.querySelector("#btnFormer"); 

    
    
    
    renderAuthorInformation();
    
    
    btnFollow(btnFollowElement, initialValue);
}


const renderAuthorInformation = (value = 1, nextValue, beforeValue) => {

    const [ author ] = getAuthorsById(value);
    quotesContainer(author.quotes);
    authorRender(author);

}