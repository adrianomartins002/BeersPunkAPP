import { Container, ContainerNumbers, ContainerText, Label, Number, TagLine, Title } from "./styled";
import FastImage from 'react-native-fast-image';
import React from "react";

interface Props {
    name: string;
    id: number;
    image: string;
    tagline?: string;
    abv?:number;
    backgroundColor?: string;
}

export const CardBeer = React.memo(({
    name,
    image,
    tagline,
    abv,
    backgroundColor
}: Props)=>{
    const tileBeer = name.length > 20 ? name.substring(0, 20) + "..." : name;
    return (
        <Container style={{backgroundColor: backgroundColor}}>
           
            <FastImage
                style={{
                    width: 50,
                    height: 200,
                    paddingVertical: 8,
                }}
                source={{
                    uri: image
                }}
                
            />
            <ContainerText>
            <Title>{tileBeer}</Title>
            <TagLine>{tagline}</TagLine>
            <ContainerNumbers>
                <Label>Abv:</Label>
                <Number>{abv}</Number>
            </ContainerNumbers>
            </ContainerText>
        </Container>
    )
})