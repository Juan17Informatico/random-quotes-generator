import { getAuthorsById } from "./helpers/getAuthorsById";
import { btnFollow } from "./listeners/btnFollow";
import { authorRender } from "./logic/authorRender";
import { quotesContainer } from "./views/quotesContainer";


export const AppQuotes = () => {

    const btnFollowElement = document.querySelector("#btnFollow"); 
    const btnFormerElement = document.querySelector("#btnFormer"); 

    
    const nextValue = btnFollow(btnFollowElement); 
    
    renderAuthorInformation();

    console.log(nextValue);

}


// const renderAuthorInformation = (value = 1, nextValue, beforeValue) => {

//     const [ author ] = getAuthorsById(value);
//     quotesContainer(author.quotes);
//     authorRender(author);

// }