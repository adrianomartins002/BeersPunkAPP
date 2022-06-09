import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import {Title as TitleStyled} from './styles';

interface Props{
    title:string;
    style?: StyleProp<TextStyle>;
}

export function Title({title, style}: Props){
    return(
        <TitleStyled style={style}>{title}</TitleStyled>
    )
}