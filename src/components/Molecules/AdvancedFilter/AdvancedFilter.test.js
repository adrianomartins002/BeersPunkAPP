import 'react-native';
import React from 'react';
import {render } from '@testing-library/react-native';

import { AdvancedFilter } from './index';

describe('<AdvancedFilter />', () => {

  it('Calls render', async () => {
 

    const testID = 'AdvancedFilter';

    const {getByTestId} = await render(
       
            <AdvancedFilter 
            
            />,
       
    );

    const advancedFilter = getByTestId(testID);

         
    expect(advancedFilter).toBeDefined();
    
  });
});