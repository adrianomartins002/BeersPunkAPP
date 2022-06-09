import React from 'react';
import { Container, InputFilterText } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { AdvancedFilter } from '../AdvancedFilter';
import {Input} from '@components/Input';

interface Props{
    value?: string;
    onChange: (value:string) =>void
}

export function FilterText({
    value,
    onChange

}:Props) {

    const [advancedFilterVisible, setAdvancedFilterVisible] = useState(false);

    return (
        <Container>
            <Input placeHolder='Beer name' value={value} onChange={onChange} style={{width: "84%", backgroundColor: "#FFF"}}/>
            <TouchableOpacity onPress={() => setAdvancedFilterVisible(true)} style={{paddingBottom: 14,}}>
                <FontAwesome name="filter" size={35} color={"#FFF"} />
            </TouchableOpacity>
            <AdvancedFilter visible={advancedFilterVisible} setVisible={setAdvancedFilterVisible} />
        </Container>
    )
}