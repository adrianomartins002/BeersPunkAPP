import React from 'react';
import { Container, InputFilterText } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { AdvancedFilter } from '../AdvancedFilter';

export function FilterText(){

    const [advancedFilterVisible, setAdvancedFilterVisible] = useState(false);

    return(
        <Container>
            <InputFilterText />
            <TouchableOpacity onPress={()=>setAdvancedFilterVisible(true)}>
            <FontAwesome name="gear" size={40} color={"#FFF"} />
            </TouchableOpacity>
            <AdvancedFilter visible={advancedFilterVisible} setVisible={setAdvancedFilterVisible} />
        </Container>
    )
}