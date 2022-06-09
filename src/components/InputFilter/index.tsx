import React from 'react';
import { Container, InputFilterText } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { AdvancedFilter } from '../AdvancedFilter';
import {Input} from '@components/Input';

export function FilterText() {

    const [advancedFilterVisible, setAdvancedFilterVisible] = useState(false);

    return (
        <Container>
            <Input placeHolder='Beer name' value='' onChange={()=>{}} style={{width: "84%", backgroundColor: "#FFF"}}/>
            <TouchableOpacity onPress={() => setAdvancedFilterVisible(true)} style={{paddingBottom: 10}}>
                <FontAwesome name="filter" size={35} color={"#FFF"} />
            </TouchableOpacity>
            <AdvancedFilter visible={advancedFilterVisible} setVisible={setAdvancedFilterVisible} />
        </Container>
    )
}