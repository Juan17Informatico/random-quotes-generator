import { getAuthorsById } from "../helpers/getAuthorsById";
import { quotesRender } from "./quotesRender";


export const authorRender = (id) => {
    const [ author ] = getAuthorsById(id);
    const authorNameText = document.querySelector('.authorNameText'); 
    const authorDescription = document.querySelector('.authorDescription'); 
    const authorDate = document.querySelector('.authorDate'); 

    authorDescription.innerText = author.biography; 
    authorNameText.innerText = author.author; 
    authorDate.innerText = `(${author.birthdate}-${author?.date_death})`; 

    

    quotesRender(author.quotes);

}