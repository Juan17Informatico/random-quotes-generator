
export const deleteQuotesDiv = () => {

    const quoteDescContainer = document.querySelectorAll(".quote-desc-container"); 

    quoteDescContainer.forEach(value => {
        value.remove();
    });


}