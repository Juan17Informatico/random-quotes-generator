import { getAuthorsById } from "./app/helpers/getAuthorsById"

export const InitApp = () => {

    console.log();

    for (let i = 0; i < 20; i++) {
        console.log( (i + 1 ) + ": ");
        console.log(getAuthorsById(i+1));
    }

}