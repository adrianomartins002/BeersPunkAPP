import 'react-native';
import React from 'react';
import {render } from '@testing-library/react-native';
import theme from "../../../theme";

import Title from './index';
import { ThemeProvider } from 'styled-components/native';

describe('<TitleBigger />', () => {

  it('Calls render', async () => {
 

    const testID = 'Title';

    const {getByTestId} = await render(
        <ThemeProvider theme={theme}>
            <Title testID={testID} size="medium">Test Title</Title>,
        </ThemeProvider>
    );

    const titleComponent = getByTestId(testID);

         
    expect(titleComponent).toBeDefined();
    expect(titleComponent.children.length).toEqual(1);
    expect(titleComponent.props.size).toEqual('medium');
  });
});