import { View, ListRenderItem, ActivityIndicator, SafeAreaView, StyleProp, TextStyle } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import { Container, ContainerHeader, ListBeers } from './styles';
import { BeersService } from '@services/beers/';
import { CardBeer } from '@components/Molecules/CardBeer';
import { FilterText } from '@components/Molecules/InputFilter';
import { useBeerFilter } from '@hooks/advanced-filter';
import { BeerDetails } from '@src/@types/Beer';
import debounce from 'lodash.debounce';
import { returnListOfBeersNoDuplications } from '../../utilities/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TitleBigger from '../../components/Atomics/Title';
import { NoNetworkConnection } from '@components/Molecules/NoNetworkConnection';
import RadioGroup from '@components/Molecules/RadioGroup';

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

const NUMBER_ITEMS_PER_TIME = 10;
const ITEM_HEIGHT_CARD_BEER = 180;

export function Home() {
    const [beersList, setBeersList] = useState<BeerDetails[]>([]);
    const [loading, setLoading] = useState(false);
    const [beerName, setBeerName] = useState("");
    const [orderListBy, setOrderListBy] = useState<"Name" | "ABV">("Name");
    const [page, setPage] = useState(1);
    const { beerFilter, setBeerFilter } = useBeerFilter();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    async function searchBeers(clearList = true) {
        setLoading(true);
        const dataBeersRequest = await BeersService.getBeersByFilters(page, NUMBER_ITEMS_PER_TIME, beerFilter);


        if (dataBeersRequest.data.length > 0) {
            let list = returnListOfBeersNoDuplications(dataBeersRequest.data, orderListBy)

            if (clearList)
                setBeersList(list)
            else
                setBeersList(returnListOfBeersNoDuplications([...beersList, ...dataBeersRequest.data], orderListBy))
        } else {
            setBeersList([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        searchBeers(false);
    }, [page])

    useEffect(() => {
        searchBeers();
    }, [beerFilter, orderListBy])

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
        if (value === "") {

            setBeerFilter(null);
        } else {


            setBeerFilter({
                ...beerFilter,
                beer_name: value
            })

        }

    }

    useEffect(() => {
        return () => {
            debounceResults.cancel();
        };
    });


    return (

        <Container>
            <NoNetworkConnection />
            
            <ListBeers
                data={beersList}
                renderItem={renderBeerCard}
                ItemSeparatorComponent={() => <View style={styleAdd.styleItemSeparator} />}
                numColumns={1}
                ListHeaderComponent={
                    <ContainerHeader>
                        <TitleBigger size='large'>Good Beers</TitleBigger>
                        <FilterText onChange={debounceResults} isAdvancedFilterActive={
                            (beerFilter != null && (beerFilter.beer_name != "" || beerFilter?.food != ""))} />
                        <RadioGroup
                            onChange={(item: "Name" | "ABV") => { setOrderListBy(item) }}
                            options={["Name", "ABV"]}
                            activeButton={orderListBy}
                        />
                    </ContainerHeader>
                }
                stickyHeaderIndices={[0]}
                maxToRenderPerBatch={NUMBER_ITEMS_PER_TIME}
                keyExtractor={item => String(item.id)}
                getItemLayout={(data, index) => {
                    
                        return {
                            length: ITEM_HEIGHT_CARD_BEER,
                            offset: ITEM_HEIGHT_CARD_BEER * (data? data.length : 0),
                            index,
                        };
                   
                }}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.2}
                onEndReached={({ distanceFromEnd }) => {
                    if (distanceFromEnd < 0) {
                        return
                    }
                    fetchMoreData()
                }}
                ListEmptyComponent={
                    <Container>
                        <TitleBigger style={styleListEmpty}>Lista de itens vazia</TitleBigger>
                    </Container>
                }
                ListFooterComponent={loading ? <ActivityIndicator /> : null}
            />

        </Container>

    );
}

const styleListEmpty: StyleProp<TextStyle> = { textAlign: "center" };

const styleAdd = {
    styleListEmpty: {
        textAlign: "center"
    },
    styleItemSeparator: { height: 20, width: 20 }
}