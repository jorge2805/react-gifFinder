import React from 'React'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en GifGridItem', () => { 
    
    const img ={
        id: 1,
        title: "img.title",
        url: "img.images.downsized_medium.url"
    }

    const wrapper = shallow( <GifGridItem {...img} /> )

    test('Probando snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de existir un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(img.title);
    });

    test('Evaluando Propiedades Imagen', () => {
        const img2 = wrapper.find('img').props();

        expect(img2.src).toBe(img.url);
        expect(img2.alt).toBe(img.title);

    })

    test('debe tener fade_in', () => {
        const Div = wrapper.find('div').prop('className');
        expect(Div.includes("animate__bounce")).toBe(true);

    })

})