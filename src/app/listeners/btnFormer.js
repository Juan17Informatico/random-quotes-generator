
import { currentValueGlobal } from "../../AuthoresQuotes";
import { renderAuthorInformation } from "../logic";
import { deleteQuotesDiv } from "./deleteQuotesDiv";

export const btnFormer = (btn) => {

    btn.addEventListener('click', () => {


        if ( currentValueGlobal <= 1) return; 
        let newValue = currentValueGlobal.value;
        newValue--;
        deleteQuotesDiv();
        renderAuthorInformation(newValue);
        // TODO:  Eliminar los quote-desc-container
    }); 
    

}

