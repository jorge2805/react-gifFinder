import React from "react"
import { AddCategory } from "../../components/AddCategory"
import { shallow } from "enzyme";

describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    });

    test('Es igual al Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe cambiar el imput', () => {
        const input = wrapper.find('input');
        const value = "miValue"

        input.simulate('change', {target:{ value: value}});

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(value);

    })

    test('Evaluando el formulario', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){}});

        expect( setCategories ).not.toHaveBeenCalled();
    })
})