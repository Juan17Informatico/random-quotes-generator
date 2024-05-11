

export const quotesRender = (quotes) => {

    const citasP = document.querySelectorAll(".quotes"); 

    citasP.forEach((cita, index) => {
        cita.innerText = quotes[index];
    })

}