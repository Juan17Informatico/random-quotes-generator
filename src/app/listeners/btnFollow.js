import { currentValueGlobal } from "../../AuthoresQuotes";
import { renderAuthorInformation } from "../views";
import { deleteQuotesDiv } from "./deleteQuotesDiv";


/**
 * 
 * @param {HTMLButtonElement} btn Recibe una variable de tipo HTML que se encarga de ejecutar la lógica para aumentar el valor del currentValueGlobal
 */
export const btnFollow = (btn) => {

    btn.addEventListener('click', () => {
        if ( currentValueGlobal.value >= 20) return; 
        let newValue = currentValueGlobal.value; 
        newValue++;
        deleteQuotesDiv();
        renderAuthorInformation(newValue);
        // TODO:  Eliminar los quote-desc-container
    }); 
    

}

