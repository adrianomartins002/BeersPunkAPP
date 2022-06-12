import 'react-native';
import React from 'react';
import {render } from '@testing-library/react-native';

import { FilterText as InputFilter} from './index';

describe('<InputFilter />', () => {

  it('Calls render', async () => {
 

    const testID = 'InputFilter';

    const {getByTestId} = await render(
       
            <InputFilter 
            
            />,
       
    );

    const inputFilterComponent = getByTestId(testID);

         
    expect(inputFilterComponent).toBeDefined();
    
  });
});