import 'react-native';
import React from 'react';
import {render } from '@testing-library/react-native';
import theme from "../../../theme";

import Label from './index';
import { ThemeProvider } from 'styled-components/native';

describe('<BeerDetails />', () => {

  it('Calls render', async () => {
 

    const testID = 'Label';

    const {getByTestId} = await render(
        <ThemeProvider theme={theme}>
            <Label testID={testID} size="medium">Label</Label>
        </ThemeProvider>
    );

    const titleComponent = getByTestId(testID);

         
    expect(titleComponent).toBeDefined();
    expect(titleComponent.children.length).toEqual(1);
    expect(titleComponent.props.size).toEqual('medium');
  });
});