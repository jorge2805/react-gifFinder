import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'


describe('Pruebas en useFetchGifs', () => {

    test('debe traer el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('FMAB') );
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('Debe retornar arreglo de 10 elementos', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Dragon Ball') );
        await waitForNextUpdate();
        
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })

})