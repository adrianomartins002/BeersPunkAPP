import React from 'react';
import { Title } from './style';

type Props ={
    children: string;
}

export default function TitleBigger({children}:Props){
    return(
        <Title>{children}</Title>
    )
}