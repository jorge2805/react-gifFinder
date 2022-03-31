import React from "react"
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas en GifExpertApp', () => {

    test('debe ser igual al snapShot', () => {

        const wrapper = shallow(<GifExpertApp/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe Crear GifGrids', () => {

        const categorias = ["Goku","FMAB"]
        const wrapper = shallow(<GifExpertApp categoriaPorDefecto={categorias}/>);

        expect(wrapper.find('GifGrid').length).toBe(categorias.length);

    })

})