import React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Container, Label, TextInput } from "./styles";

interface Props{
    label: string;
    onChange: (data:string)=>void;
    value: string;
}

export function Input({label, onChange, value}:Props){

    const onChangeEvent = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        onChange(value)
      }

    return(
        <Container>
            <Label>{label} </Label>
            <TextInput onChange={onChangeEvent} value={value}/>
        </Container>
    )
}