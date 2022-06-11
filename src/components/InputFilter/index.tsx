import React from 'react';
import { Container, InputFilterText } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { AdvancedFilter } from '../AdvancedFilter';
import {Input} from '@components/Input';

interface Props{
    value?: string;
    onChange: (value:string) =>void
}

export function FilterText({
    onChange

}:Props) {

    const [advancedFilterVisible, setAdvancedFilterVisible] = useState(false);

    return (
        <Container>
            <Input testId="InputFilter" placeHolder='Beer name' onChange={onChange} style={{width: "84%", backgroundColor: "#FFF"}}/>
            <TouchableOpacity onPress={() => setAdvancedFilterVisible(true)} >
                <FontAwesome name="filter" size={35} color={"#000"} style={{marginBottom: 10}}/>
            </TouchableOpacity>
            <AdvancedFilter visible={advancedFilterVisible} setVisible={setAdvancedFilterVisible} />
        </Container>
    )
}