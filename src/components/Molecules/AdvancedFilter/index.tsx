import React, { useEffect, useState } from "react";
import { ButtonApplyFiltersContainer, ButtonApplyFiltersText, Container, ContainerFilter, FoodMatch, LineClose } from "./style"
import Modal from "react-native-modal";
import { Input } from "@components/Atomics/TextInput";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useBeerFilter } from "@hooks/advanced-filter";
import Title from "@components/Atomics/Title";
import {Slider} from '@miblanchard/react-native-slider';
import Label from "@components/Atomics/Label";

interface Props {
    visible: boolean;
    setVisible: (state: boolean) => void;

}

const INITIAL_ABV = 0.1;
const MAXIMUM_ABV = 10;

export function AdvancedFilter({ visible, setVisible }: Props) {
    const [playIcon, setPlayIcon] = useState(true);

    const [foodName, setFoodName] = useState("");
    const [beerName, setBeerName] = useState("");
    const [abvGt, setAbvGt] = useState<number>(INITIAL_ABV);

    const { beerFilter, setBeerFilter } = useBeerFilter();

    const handlePlayIcon = () => {
        if (playIcon === true)
            setPlayIcon(false);
        else
            setPlayIcon(true);
    }

    const applyFilters = () => {
        setBeerFilter({
            food: foodName,
            beer_name: beerName,
            abv_gt: abvGt,
        })

        setVisible(false);
    }

    useEffect(()=>{
        if(beerFilter?.beer_name)
            setBeerName(beerFilter.beer_name)

        if(beerFilter?.food)
            setFoodName(beerFilter?.food)

        if(beerFilter?.abv_gt)
            setAbvGt(beerFilter?.abv_gt);

    },[])

    return (
        <Modal

            isVisible={visible}
            animationIn={"bounceInUp"}
            onBackdropPress={() => setVisible(false)}
            style={{
                display: "flex",
                justifyContent: "flex-end",
                zIndex: 99,
                margin: 0,
            }}
            animationOutTiming={800}
            animationInTiming={800}
            testID="AdvancedFilter"
        >
            
            <Container >
                <LineClose onPress={() => setVisible(false)} />
                <ContainerFilter>
                    <Title size="medium">Advanced filter</Title>
                    <Input placeHolder="Name" onChange={setBeerName} value={beerName} />
                    <Input placeHolder="Food Name" onChange={setFoodName} value={foodName} />
                    <Label size="medium">Abv greater than:</Label>
                    <Label>{String(abvGt)}</Label>
                    <Slider
                    value={abvGt}
                    onValueChange={value => setAbvGt(Number(Number(value).toFixed(2)))}
                    maximumValue={MAXIMUM_ABV}

                    
                />
                   
                <ButtonApplyFiltersContainer onPress={applyFilters}>
                    <ButtonApplyFiltersText>Apply filters</ButtonApplyFiltersText>
                     <FontAwesome name="search" size={30} color={"#FFF"} />
                </ButtonApplyFiltersContainer>
                </ContainerFilter>
            </Container>

        </Modal>
    )
}