import React from 'react';
import {FilterText as InputFilter} from '../';
import { fireEvent, render } from '@testing-library/react-native';


describe("Input Filter Component", ()=>{

        it('should render the component', ()=>{
            
            const component = render(<InputFilter value='teste' onChange={()=>{}} />)
            
            const inputFilter = component.getByTestId('InputFilter');

           expect(inputFilter).toBeDefined();
           
        }),

        it('should change the value if change the input', ()=>{
            let value = '';
            function onChange(data){
                value = data;
            }
            const component = render(<InputFilter value={value} onChange={onChange} />)
            
            const inputFilter = component.getByTestId('InputFilter');

           fireEvent.changeText(inputFilter, onChange)
        })
})