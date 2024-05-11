
export const authorRender = (author) => {
    const authorNameText = document.querySelector('.authorNameText'); 
    const authorDescription = document.querySelector('.authorDescription'); 
    const authorDate = document.querySelector('.authorDate'); 

    authorDescription.innerText = author.biography; 
    authorNameText.innerText = author.author; 
    authorDate.innerText = `(${author.birthdate}-${author?.date_death})`; 


}