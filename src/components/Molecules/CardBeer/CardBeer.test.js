import 'react-native';
import React from 'react';
import {render } from '@testing-library/react-native';
import theme from "../../../theme";

import {CardBeer} from './index';
import { ThemeProvider } from 'styled-components/native';

describe('<CardBeer />', () => {

  it('Calls render', async () => {
 

    const testID = 'CardBeer';

    const {getByTestId} = await render(
        <ThemeProvider theme={theme}>
            <CardBeer name="test card beer"/>
        </ThemeProvider>
    );

    const titleComponent = getByTestId(testID);

         
    expect(titleComponent).toBeDefined();
    
  });
});