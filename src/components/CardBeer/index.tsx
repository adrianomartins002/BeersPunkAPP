import { Container, ContainerImage, ContainerNumbers, ContainerText, Label, Number, TagLine, Title } from "./styled";
import FastImage from 'react-native-fast-image';
import React from "react";

interface Props {
    name: string;
    id: number;
    image: string;
    tagline?: string;
    abv?: number;
    ibu?: number;
    ph?:number;
    backgroundColor?: string;
    onPress?: () => void
}

export const CardBeer = React.memo(({
    name,
    image,
    tagline,
    abv,
    backgroundColor,
    onPress
}: Props) => {
    const tileBeer = name.length > 20 ? name.substring(0, 20) + "..." : name;
    return (
        <Container style={{ backgroundColor: backgroundColor }} onPress={onPress}>
            
            <ContainerImage style={{
                
                shadowColor: "#787777",
                shadowOffset: {
                    width: 0,
                    height: 7,
                },
                shadowOpacity: 0.43,
                shadowRadius: 9.51,
                
                elevation: 15,
            }}>
                <FastImage
                    style={{
                        width: 30,
                        height: 120,
                        paddingVertical: 8,
                    }}
                    source={{
                        uri: image
                    }}

                />
            </ContainerImage>
            
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