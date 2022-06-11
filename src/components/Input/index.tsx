import React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData, StyleProp, ViewStyle } from "react-native";
import { Container, Label, TextInput } from "./styles";

interface Props {
    placeHolder?: string;
    onChange: (data: string) => void;
    value?: string;
    style?: StyleProp<ViewStyle>,
    testId?: string;
}

export function Input({ testId, onChange, value, placeHolder, style }: Props) {

    const onChangeEvent = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        onChange(value)
    }

    return (
        <Container style={style}>
            <TextInput testID={testId} onChange={onChangeEvent} value={value} placeholder={placeHolder} />
        </Container>
    )
}