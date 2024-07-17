import { btnFollow, deleteQuotesDiv, renderAuthorInformation } from "../../../src/app";
import { currentValueGlobal } from "../../../src/AuthoresQuotes";

// Mock de las funciones para evitar su ejecución real durante la prueba
jest.mock("../../../src/app", () => ({
    renderAuthorInformation: jest.fn(),
}));

jest.mock("../../../src/app", () => ({
    deleteQuotesDiv: jest.fn(),
}));



describe('Se evalúa la funcionalidad de btnFollow', () => { 

    beforeEach(() => {
        // Configuramos el valor inicial de currentValueGlobal
        currentValueGlobal.value = 1;
    });

    test('El btnFollow debe de cambiar el valor del currentValueGlobal ', () => {
        
        const button = document.createElement('button'); 
        btnFollow(button); 
        button.click();

        expect(currentValueGlobal.value).toBe(2); 

    });

});