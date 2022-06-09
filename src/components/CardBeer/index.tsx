import { Container, Title } from "./styled";
import FastImage from 'react-native-fast-image';
import React from "react";

interface Props {
    name: string;
    id: number;
    image: string;
}

export const CardBeer = React.memo(({
    name,
    image
}: Props)=>{
    const tileBeer = name.length > 12 ? name.substring(0, 12) + "..." : name;
    return (
        <Container>
            <Title>{tileBeer}</Title>
            <FastImage
                style={{
                    width: 45,
                    height: 180,
                    paddingVertical: 10,
                }}
                source={{
                    uri: image
                }}
                
            />
        </Container>
    )
})