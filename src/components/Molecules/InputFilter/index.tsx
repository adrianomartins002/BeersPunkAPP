import React, {useEffect, useState} from 'react';
import { Container, InputFilterText } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { AdvancedFilter } from '../AdvancedFilter';
import {Input} from '@components/Atomics/TextInput';

interface Props{
    value?: string;
    onChange: (value:string) =>void,
    isAdvancedFilterActive: boolean
}

export function FilterText({
    onChange,
    isAdvancedFilterActive

}:Props) {

    const [advancedFilterVisible, setAdvancedFilterVisible] = useState(false);
    const [colorFilterIcon, setColorFilterIcon] = useState("#000");
    

    useEffect(()=>{
        if(isAdvancedFilterActive)
            setColorFilterIcon("blue")
        else
            setColorFilterIcon("#000")
    },[isAdvancedFilterActive])

    return (
        <Container testID="InputFilter">
            <Input  placeHolder='Beer name' onChange={onChange} style={{width: "84%", backgroundColor: "#FFF"}}/>
            <TouchableOpacity onPress={() => setAdvancedFilterVisible(true)} >
                <FontAwesome name="filter" size={35} color={colorFilterIcon} style={{marginBottom: 10}}/>
            </TouchableOpacity>
            <AdvancedFilter visible={advancedFilterVisible} setVisible={setAdvancedFilterVisible} />
        </Container>
    )
}