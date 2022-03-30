import { getGifts } from "../../helpers/getGifts"

describe('Pruebas en getGifts', () => {

    test('Debe tener 10 imagenes', async () => {

        const Response = await getGifts('Goku');

        expect(Response.length).toBe(10);

    })

    test('Debe traer vacio sin argumento', async () => {

        const Response = await getGifts('');

        expect(Response.length).toBe(0);

    })
})