import { btnFollow, btnFormer, renderAuthorInformation } from "./app";

export let currentValueGlobal = {
    value: 1
}; 

export const InitApp = () => {

    const btnFollowElement = document.querySelector("#btnFollow"); 
    const btnFormerElement = document.querySelector("#btnFormer"); 

    
    renderAuthorInformation();
    
    
    btnFollow(btnFollowElement);
    btnFormer(btnFormerElement); 
}

