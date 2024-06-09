
import { currentValue, renderAuthorInformation } from "../app";
import { deleteQuotesDiv } from "./deleteQuotesDiv";

export const btnFormer = (btn) => {

    btn.addEventListener('click', () => {


        if ( currentValue <= 1) return; 
        let newValue = currentValue;
        newValue--;
        deleteQuotesDiv();
        renderAuthorInformation(newValue);
        // TODO:  Eliminar los quote-desc-container
    }); 
    

}

