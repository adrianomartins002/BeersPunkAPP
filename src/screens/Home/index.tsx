import { View, ListRenderItem, ActivityIndicator, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import { Container, ContainerHeader, ListBeers } from './styles';
import { BeersService } from '@services/beers/';
import { CardBeer } from '@components/CardBeer';
import { FilterText } from '@components/InputFilter';
import { useBeerFilter } from '@hooks/advanced-filter';
import { Title } from '@components/Title';
import { BeerDetails } from '@src/@types/Beer';
import debounce from 'lodash.debounce';
import { returnListOfBeersNoDuplications } from '../../utilities/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

export function Home() {
    const [beersList, setBeersList] = useState<BeerDetails[]>([]);
    const [loading, setLoading] = useState(false);
    const [beerName, setBeerName] = useState("");
    const [page, setPage] = useState(1);
    const { beerFilter, setBeerFilter } = useBeerFilter();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    async function searchBeers(clearList?: boolean) {
        setLoading(true);
        const dataBeersRequest = await BeersService.getBeersByFilters(page, 10, beerFilter);

        if (dataBeersRequest.data.length > 0) {
            let list = returnListOfBeersNoDuplications(dataBeersRequest.data)
            if (clearList)
                setBeersList(list)
            else
                setBeersList(returnListOfBeersNoDuplications([...beersList, ...dataBeersRequest.data]))
        }

        setLoading(false);
    }

    async function searchBeersFilter() { }


    useEffect(() => {
        console.log("deixa ver os filtros:", beerFilter)
        if (beerFilter !== null)
            searchBeers(true)
        else
            searchBeers()
    }, [beerFilter, page])

    useEffect(() => {
        searchBeers();
        debounceResults.cancel();

    }, [])

    const renderBeerCard: ListRenderItem<BeerDetails> = ({ item }) => (
        <CardBeer
            id={item.id}
            name={item.name}
            image={item.image_url}
            tagline={item.tagline}
            abv={item.abv}
            backgroundColor={item.backgroundColor}
            onPress={() => navigation.navigate('BeerDetails', {
                ...item
            })}
        />
    );

    const fetchMoreData = async () => {
        setPage(page + 1)

    }

    const debounceResults = useMemo(() => {
        return debounce(onChangeBeerName, 700)
    }, [])

    function onChangeBeerName(value: string) {
        setPage(1);
        setBeerName(value)
        setBeerFilter({
            ...beerFilter,
            beer_name: value
        })

        if (value === "")
            setBeerFilter(null);
    }

    useEffect(() => {
        return () => {
            debounceResults.cancel();
        };
    });
    
    console.log("tamanho da lista:", beersList.length);

    return (

        <Container>
            <ContainerHeader>
                <Title title='Good Beers' />
                <FilterText onChange={debounceResults} />
            </ContainerHeader>

            <ListBeers
                data={beersList}
                renderItem={renderBeerCard}
                ItemSeparatorComponent={()=><View style={{height: 20, width: 20}}/>}
                numColumns={1}
                // key={item=>item.id}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.2}
                onEndReached={({distanceFromEnd})=>{
                    if(distanceFromEnd <0 ){
                        return
                    }
                    fetchMoreData()
                }}
                style={{paddingTop: 10}}
                ListFooterComponent={loading? <ActivityIndicator /> : null}
            />

        </Container>

    );
}