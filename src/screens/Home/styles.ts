import styled , {css}from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

interface BeerDetails{
    name: string;
    id: number;
    image_url: string;
}

export const Container = styled.View`
    flex:1;
    justify-content: center;  
    background-color: ${({theme})=> theme.COLORS.BACKGROUND};
`;

export const ListBeers = styled(FlatList as new (props: FlatListProps<BeerDetails>) => FlatList<BeerDetails>)`
          
`;

export const ContainerHeader = styled.View`
    width: 100%;
    height: 180px;
    padding-left: 30px;
    padding-right: 20px;
    flex-direction: column;
    justify-content:flex-end ;
    align-items: flex-start;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND};
    
`;



