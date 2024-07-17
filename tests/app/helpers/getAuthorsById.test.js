import { getAuthorsById } from "../../../src/app/helpers/getAuthorsById";


describe('Se evalúa la función getAuthorsById', () => { 

    const authorExample = [{
        id: 2,
        author: "Albert Camus",
        birthdate: 1913,
        date_death: 1960,
        biography: "Albert Camus, nacido el 7 de noviembre de 1913 en Mondovi, Argelia, fue un prominente escritor, filósofo y periodista francés, cuya obra reflejó la influencia de su origen argelino y los acontecimientos de su época. Abordó temas como la absurdidad de la existencia humana, la lucha contra la injusticia y la búsqueda de sentido en un mundo sin sentido aparente. "
            + "\nA pesar de su brillantez académica, problemas de salud interrumpieron su vida universitaria, llevándolo a dedicarse por completo a la escritura y el periodismo.Su obra más conocida, 'El extranjero'(1942), retrata la alienación y la indiferencia existencial a través del personaje de Meursault.También escribió 'La peste'(1947), una alegoría sobre el absurdo y la lucha contra el mal."
            + "\nCamus fue un destacado ensayista y dramaturgo, conocido por obras como 'El mito de Sísifo'(1942), donde explora el absurdo de la existencia, y por obras teatrales como 'Calígula'(1944) y 'Los justos'(1950)."
            + "\nEn términos políticos, participó en la resistencia francesa durante la Segunda Guerra Mundial y criticó el totalitarismo de ambos extremos políticos, distanciándose del comunismo debido a sus críticas a la Unión Soviética y manteniendo una postura humanista y libertaria."
            + "\nSu vida terminó trágicamente en un accidente automovilístico el 4 de enero de 1960, pero su legado literario y filosófico perdura, siendo objeto de estudio y admiración en todo el mundo.Su obra sigue siendo relevante para entender las complejidades de la condición humana y los desafíos éticos y existenciales de la vida moderna.",
        quotes: [ 
            "El hombre es la única criatura que se niega a ser lo que es.",
            "En medio del invierno, aprendí por fin que había en mí un verano invencible.",
            "El único modo de lidiar con un mundo sin libertad es volverse tan absolutamente libre que tu mera existencia sea un acto de rebelión.",
        ]   
    }]

    test('Debe de retornar el author mediante su ID', () => {

        const author = getAuthorsById(2);

        expect( author ).toEqual(authorExample); 

    }); 

});
