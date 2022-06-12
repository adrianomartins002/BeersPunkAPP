import 'react-native';
import React from 'react';
import {render } from '@testing-library/react-native';

import RadioGroup from './index';

describe('<RadioGroup />', () => {

  it('Calls render', async () => {
 

    const testID = 'RadioGroup';

    const {getByTestId} = await render(
       
            <RadioGroup 
            options={["Name", "ABV"]}
            onChange={()=>{}}
            activeButton='Name'
            />,
       
    );

    const radioGroupComponent = getByTestId(testID);

         
    expect(radioGroupComponent).toBeDefined();
    
  });
});