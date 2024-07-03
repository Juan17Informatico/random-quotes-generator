
import { currentValueGlobal } from "../../AuthoresQuotes";
import { renderAuthorInformation } from "../views";
import { deleteQuotesDiv } from "./deleteQuotesDiv";

/**
 * 
 * @param {HTMLButtonElement} btn Recibe una variable de tipo HTML que se encarga de ejecutar la lógica para disminuir el valor del currentValueGlobal
 */
export const btnFormer = (btn) => {

    btn.addEventListener('click', () => {
        if ( currentValueGlobal.value <= 1) return; 
        let newValue = currentValueGlobal.value;
        newValue--;
        deleteQuotesDiv();
        renderAuthorInformation(newValue);
    }); 
    

}

