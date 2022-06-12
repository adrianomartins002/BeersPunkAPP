import React from 'react';
import { TextProps } from 'react-native';
import { SizeProps, Title as TitleStyled } from './style';

type Props = TextProps & {
    children: string;
    size?: SizeProps;
}

export default function Title({children, size, ...rest}:Props){
    return(
        <TitleStyled testID='Title' size={size} {...rest}>{children}</TitleStyled>
    )
}