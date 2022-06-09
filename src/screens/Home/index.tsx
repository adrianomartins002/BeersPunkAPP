import {View, ListRenderItem } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Container, ContainerHeader, ListBeers, Title } from './styles';
import { BeersService } from '@services/beers/';
import { CardBeer } from '@components/CardBeer';
import { FilterText } from '@components/InputFilter';
import { useBeerFilter } from '@hooks/advanced-filter';

interface BeerDetails{
    name: string;
    id: number;
    image_url: string;
}


export function Home() {
    const [beersList, setBeersList] = useState([]);
    const [page, setPage] = useState(1);
    const {beerFilter} = useBeerFilter();


    async function searchBeers(){
        console.log("buscou", beerFilter);
        const dataBeersRequest = await BeersService.getBeersByFilters(page,25,beerFilter);
        console.log("lista deixa ver:", dataBeersRequest.data.length);
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
                    <Title>Good Beers</Title>
                    <FilterText />
            </ContainerHeader>
            <ListBeers
                data={beersList}
                renderItem={renderBeerCard}
                ItemSeparatorComponent={()=><View style={{height: 20, width: 20}}/>}
                numColumns={2}
                key={item=>item.id}
                keyExtractor={item=>String(item.id)}
                showsVerticalScrollIndicator={false}
                //onEndReachedThreshold={0.2}
                onEndReached={fetchMoreData}
            />

        </Container>
    );
}