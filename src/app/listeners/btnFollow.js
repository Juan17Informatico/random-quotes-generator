
export const btnFollow = (btn, initialValue = 1) => {

    btn.addEventListener('click', () => {

        console.log(initialValue);
        return (initialValue += 1); 

    }); 
    

}