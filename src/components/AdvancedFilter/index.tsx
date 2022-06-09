import React, { useEffect, useState } from "react";
import { ButtonApplyFiltersContainer, ButtonApplyFiltersText, Container, ContainerFilter, FoodMatch, LineClose } from "./style"
import Modal from "react-native-modal";
import {Title} from '@components/Title';
import { Input } from "@components/Input";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useBeerFilter } from "@hooks/advanced-filter";

interface Props {
    visible: boolean;
    setVisible: (state: boolean) => void;

}

export function AdvancedFilter({ visible, setVisible }: Props) {
    const [playIcon, setPlayIcon] = useState(true);

    const [foodName, setFoodName] = useState("");
    const [beerName, setBeerName] = useState("");
    const [abvGt, setAbvGt] = useState("");

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
            setAbvGt(String(beerFilter?.abv_gt));

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
        >
            <Container>
                <LineClose onPress={() => setVisible(false)} />
                <ContainerFilter>
                    <Title title="Advanced filter" style={{color: "#000", marginBottom: 20, fontSize: 28}}/>
                    <Input placeHolder="Name" onChange={setBeerName} value={beerName} />
                    <Input placeHolder="Food Name" onChange={setFoodName} value={foodName} />
                    <Input placeHolder="ABV" onChange={setAbvGt} value={abvGt} />
                   
                </ContainerFilter>
                <ButtonApplyFiltersContainer onPress={applyFilters}>
                    <ButtonApplyFiltersText>Apply filters</ButtonApplyFiltersText>
                     <FontAwesome name="search" size={30} color={"#FFF"} />
                </ButtonApplyFiltersContainer>
            </Container>

        </Modal>
    )
}