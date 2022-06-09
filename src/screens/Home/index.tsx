import {View, ListRenderItem } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Container, ContainerHeader, ListBeers } from './styles';
import { BeersService } from '@services/beers/';
import { CardBeer } from '@components/CardBeer';
import { FilterText } from '@components/InputFilter';
import { useBeerFilter } from '@hooks/advanced-filter';
import { Title } from '@components/Title';
import {BeerDetails} from '@src/@types/Beer';




export function Home() {
    const [beersList, setBeersList] = useState<BeerDetails[]>([]);
    const [page, setPage] = useState(1);
    const {beerFilter} = useBeerFilter();


    async function searchBeers(){
        const dataBeersRequest = await BeersService.getBeersByFilters(page,25,beerFilter);
        setBeersList(dataBeersRequest.data);
    }

    useEffect(()=>{
        searchBeers()
    },[beerFilter])

    useEffect(()=>{
        searchBeers();

    },[])

    const renderBeerCard: ListRenderItem<BeerDetails> = ({ item }) => (
        <CardBeer
          id={item.id}
          name={item.name}
          image={item.image_url}
        />
      );

    const fetchMoreData = async ()=>{
        setPage(page+1)
        const dataBeersRequest = await BeersService.getBeersByFilters(page,25,beerFilter);
        if(dataBeersRequest.data.length>0) {
            setBeersList([...beersList, ...dataBeersRequest.data])
        }
    }
    
    return (
        <Container>
            <ContainerHeader>
                    <Title title='Good Beers'/>
                    <FilterText />
            </ContainerHeader>
            <ListBeers
                data={beersList}
                renderItem={renderBeerCard}
                ItemSeparatorComponent={()=><View style={{height: 20, width: 20}}/>}
                numColumns={2}
                // key={item=>item.id}
                keyExtractor={item=>String(item.id)}
                showsVerticalScrollIndicator={false}
                //onEndReachedThreshold={0.2}
                onEndReached={fetchMoreData}
            />

        </Container>
    );
}