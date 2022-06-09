import {View, ListRenderItem } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import { Container, ContainerHeader, ListBeers } from './styles';
import { BeersService } from '@services/beers/';
import { CardBeer } from '@components/CardBeer';
import { FilterText } from '@components/InputFilter';
import { useBeerFilter } from '@hooks/advanced-filter';
import { Title } from '@components/Title';
import {BeerDetails} from '@src/@types/Beer';
import debounce from 'lodash.debounce';
import { returnListOfBeersNoDuplications } from '../../utilities/index';




export function Home() {
    const [beersList, setBeersList] = useState<BeerDetails[]>([]);
    const [beerName, setBeerName] = useState("");
    const [page, setPage] = useState(1);
    const {beerFilter, setBeerFilter} = useBeerFilter();


    async function searchBeers(clearList?:boolean){
        
        const dataBeersRequest = await BeersService.getBeersByFilters(page,25,beerFilter);
        
        if(dataBeersRequest.data.length>0) {
            if(clearList)
                setBeersList(returnListOfBeersNoDuplications(dataBeersRequest.data))
            else
                setBeersList(returnListOfBeersNoDuplications([...beersList, ...dataBeersRequest.data]))    
        }
        
    }

    async function searchBeersFilter(){}


    useEffect(()=>{
        if(beerFilter !== null)
            searchBeers(true)
        else
            searchBeers()
    },[beerFilter, page])

    useEffect(()=>{
        searchBeers();
        debounceResults.cancel();

    },[])

    const renderBeerCard: ListRenderItem<BeerDetails> = ({ item }) => (
        <CardBeer
          id={item.id}
          name={item.name}
          image={item.image_url}
          tagline={item.tagline}
          abv={item.abv}
          backgroundColor={item.backgroundColor}
        />
      );

    const fetchMoreData = async ()=>{
        setPage(page+1)
        
    }

    const debounceResults = useMemo(()=>{
        return debounce(onChangeBeerName, 200)
    },[])
    
    function onChangeBeerName(value:string){
        setPage(1);
        setBeerName(value)
        setBeerFilter({
            ...beerFilter,
            beer_name: value
        })
    }

    useEffect(() => {
        return () => {
            debounceResults.cancel();
        };
      });


    console.log("tamanho:", beersList.length)

    return (
        <Container>
            <ContainerHeader>
                    <Title title='Good Beers'/>
                    <FilterText onChange={debounceResults}/>
            </ContainerHeader>
            <ListBeers
                data={beersList}
                renderItem={renderBeerCard}
                // ItemSeparatorComponent={()=><View style={{height: 20, width: 20}}/>}
                numColumns={1}
                // key={item=>item.id}
                keyExtractor={item=>String(item.id)}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.2}
                onEndReached={fetchMoreData}
            />

        </Container>
    );
}