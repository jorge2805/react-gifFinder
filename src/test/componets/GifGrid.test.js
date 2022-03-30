import React from "react"
import { shallow } from "enzyme";

import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en GifGrid', () => {
    
    
    test('Debe ser igual al SnapShot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category="Goku" /> );
        expect(wrapper).toMatchSnapshot();
    });    

    test('debe de generar items cuando se hace fetch ', () => {
        
        const gift =[{
            id: 'Hola',
            url: 'url',
            title: 'Titulo'
        }]

        useFetchGifs.mockReturnValue({
            data: gift,
            loading: false
        });
        const wrapper = shallow( <GifGrid category="Goku" /> );

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(true);
        expect(wrapper.find('GifGridItem').length).toBe(gift.length);
    });
})