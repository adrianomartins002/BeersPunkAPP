import React from 'react';
import {StatusBar, View} from 'react-native';
import { ButtonContainer, Container, ContainerDetails, ContainerSpecification, ContainerSpecifications, DetailsText, Header, Label, Title, TitleDetails, Value } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';


type RootStackParamList = {
    BeerDetails: {
        id: number;
        image_url: string;
        name: string;
        tagline?: string;
        abv?: number;
        ibu?: number;
        ph?: number;
        description?: string;
    };
};

// type BeerDetailsScreenRouteProp = RouteProp<RootStackParamList, 'BeerDetails'>;

type Props = NativeStackScreenProps<RootStackParamList, 'BeerDetails', 'BeerStackRoutes'>;

export function BeerDetails({ route, navigation }: Props) {

    return (
        <Container>
            <StatusBar barStyle={"light-content"}/>
            <Header>
                <ButtonContainer onPress={() => {
                    navigation.goBack()
                }}>
                    <FontAwesome name="angle-left" size={40} color={"#FFF"} />
                </ButtonContainer>
                <Title>{route.params.name}</Title>
            </Header>
            <Container style={{
                backgroundColor: "#FFF",
                borderRadius: 80,
            }}>
                <View style={{
                    shadowColor: "#787777",
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    shadowOpacity: 0.43,
                    shadowRadius: 9.51,
                    
                    elevation: 15,
                    paddingTop:20
                }}>

                
            <FastImage
                style={{
                    
                    width: 70,
                    height: 280,
                    paddingVertical: 8,
                    paddingBottom: 70,
                    zIndex: 99,

                }}
                source={{
                    uri: route.params.image_url,
                    
                }}
                resizeMode="stretch"

            />
            </View>
            <ContainerDetails>
                <TitleDetails>{route.params.tagline}</TitleDetails>
                <ContainerSpecifications>
                    <ContainerSpecification>
                        <Label>Abv: </Label>
                        <Value>{route.params.abv}</Value>
                    </ContainerSpecification>
                    <ContainerSpecification>
                        <Label>Ibu: </Label>
                        <Value>{route.params.ibu}</Value>
                    </ContainerSpecification>
                    <ContainerSpecification>
                        <Label>Ph: </Label>
                        <Value>{route.params.ph}</Value>
                    </ContainerSpecification>
                </ContainerSpecifications>
                <DetailsText>
                    <Label style={{
                        color: "#777575",
                        fontSize: 18,
                    }}>Details:</Label>
                    {route.params.description}
                </DetailsText>
            </ContainerDetails>
            </Container>
        </Container>

    )
}