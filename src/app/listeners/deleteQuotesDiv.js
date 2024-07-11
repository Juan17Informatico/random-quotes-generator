/**
 * Función encarga de eliminar los contenedores de las citas de los autores
 */
export const deleteQuotesDiv = () => {

    const quoteDescContainer = document.querySelectorAll(".quote-desc-container"); 

    quoteDescContainer.forEach(value => {
        value.remove();
    });


}