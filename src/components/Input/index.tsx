import React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData, StyleProp, ViewStyle } from "react-native";
import { Container, Label, TextInput } from "./styles";

interface Props {
    placeHolder?: string;
    onChange: (data: string) => void;
    value: string;
    style?: StyleProp<ViewStyle>
}

export function Input({  onChange, value, placeHolder, style }: Props) {

    const onChangeEvent = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        onChange(value)
    }

    return (
        <Container style={style}>
            <TextInput onChange={onChangeEvent} value={value} placeholder={placeHolder} />
        </Container>
    )
}