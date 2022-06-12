import React from 'react';
import { TextProps } from 'react-native';
import { SizeProps, Label as LabelStyled } from './style';

type Props = TextProps & {
    children: string;
    size?: SizeProps;
}

export default function Label({children, size, ...rest}:Props){
    return(
        <LabelStyled testID='Label' size={size} {...rest}>{children}</LabelStyled>
    )
}