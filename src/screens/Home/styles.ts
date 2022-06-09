import styled , {css}from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { FlatList, FlatListProps } from 'react-native';

interface BeerDetails{
    name: string;
    id: number;
    image_url: string;
}

export const Container = styled.View.attrs(({theme})=>({
    backgroundColor: theme.COLORS.BACKGROUND
}))`
    flex:1;
    justify-content: center;  
    padding-top: 80px;
`;

export const ListBeers = styled(FlatList as new (props: FlatListProps<BeerDetails>) => FlatList<BeerDetails>)`
    flex: 1;
      
`;

export const ContainerHeader = styled.View`
    width: 100%;
    height: 150px;
    padding-left: 30px;
    padding-right: 20px;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;
    align-items: flex-start;
`;



