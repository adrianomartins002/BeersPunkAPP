import React, { useState } from "react";
import { ButtonApplyFilters, Container, ContainerFilter, FoodMatch, LineClose } from "./style"
import Modal from "react-native-modal";
import FastImage from "react-native-fast-image";
import { InputFilterText } from "../InputFilter/styles";
import { Input } from "@components/Input";
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

    const { setBeerFilter } = useBeerFilter();

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
                    <Input label="Name:" onChange={setBeerName} value={beerName} />
                    <Input label="Food Name:" onChange={setFoodName} value={foodName} />
                    <Input label="ABV:" onChange={setAbvGt} value={abvGt} />
                   
                </ContainerFilter>
                <ButtonApplyFilters title="Aplicar filtros" onPress={applyFilters} />
            </Container>

        </Modal>
    )
}