import { quotesRender } from "../logic/quotesRender";


/**
 * 
 * @param {Array} quotes 
 */
export const quotesContainer = (quotes) => {
    const quotesContainer = document.querySelector('.quotes-container'); 

    quotes.forEach(quote => {
        const quoteDescContainer = document.createElement("div");
        quoteDescContainer.className = "quote-desc-container"; 

        const paragraph = document.createElement("p");
        paragraph.className = "quotes";
        quoteDescContainer.appendChild(paragraph);

        quotesContainer.append(quoteDescContainer); 

        

    });

    quotesRender(quotes); 

}