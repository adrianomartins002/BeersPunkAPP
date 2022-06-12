import 'react-native';
import React from 'react';
import {render } from '@testing-library/react-native';
import theme from "../../../theme";

import {Input as TextInput} from './index';
import { ThemeProvider } from 'styled-components/native';

describe('<TextInput />', () => {

  it('Calls render', async () => {
 

    const testID = 'TextInput';

    const {getByTestId} = await render(
        <ThemeProvider theme={theme}>
            <TextInput />
        </ThemeProvider>
    );

    const titleComponent = getByTestId(testID);

         
    expect(titleComponent).toBeDefined();
    
  });
});