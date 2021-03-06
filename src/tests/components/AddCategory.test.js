import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Test in <AddCategory/>', () => {

    const setCategories =  jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('should render correcly', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('I must change the text box ', () => {
        const input = wrapper.find('input');
        const value = 'Hi world';

        input.simulate('change', { target: { value }  });

        //expect( wrapper.find('p').text().trim() ).toBe( value );
    })
    
    test('we simulate the submit of the form ', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('we must call the function setCategories and  ', () => {
        
        const value = 'Hi world';

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        expect( wrapper.find('input').prop('value') ).toBe('');
        
    })
    
    
    
})
