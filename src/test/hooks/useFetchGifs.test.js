import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'


describe('Pruebas en useFetchGifs', () => {

    test('debe traer el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('FMAB') );
        const {data, loading} = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

})