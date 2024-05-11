

export const quotesRender = (quotes) => {

    const citasP = document.querySelectorAll(".citas"); 

    citasP.forEach((cita, index) => {
        cita.innerText = quotes[index];
    })

}