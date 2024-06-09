import { getAuthorsById } from "./helpers/getAuthorsById";
import { btnFollow } from "./listeners/btnFollow";
import { btnFormer } from "./listeners/btnFormer";
import { authorRender } from "./logic/authorRender";
import { quotesContainer } from "./views/quotesContainer";

export let currentValue = 1; 

export const AppQuotes = () => {

    const btnFollowElement = document.querySelector("#btnFollow"); 
    const btnFormerElement = document.querySelector("#btnFormer"); 

    
    renderAuthorInformation();
    
    
    btnFollow(btnFollowElement);
    btnFormer(btnFormerElement); 
}


export const renderAuthorInformation = (value = 1) => {

    const [ author ] = getAuthorsById(value);
    quotesContainer(author.quotes);
    authorRender(author);
    currentValue = value;
    return currentValue; 
}