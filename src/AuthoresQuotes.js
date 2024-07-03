import { btnFollow, btnFormer, renderAuthorInformation } from "./app";

/**
 * Estado global que maneja el ID de los autores
 */
export let currentValueGlobal = {
    value: 1
}; 

/**
 * Función que inicia la aplicación, renderizando al primer autor y añadiendo la lógica a los botenes
 */
export const InitApp = () => {

    const btnFollowElement = document.querySelector("#btnFollow"); 
    const btnFormerElement = document.querySelector("#btnFormer"); 

    
    renderAuthorInformation();
    
    
    btnFollow(btnFollowElement);
    btnFormer(btnFormerElement); 
}

