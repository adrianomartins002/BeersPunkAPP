import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: 55px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    border-radius: 12px;
    border-width: 1px;
    border-color: #CCC;
    margin-bottom: 20px;

`;

export const Label = styled.Text`
    width: 40%;
    height: 30px;
    font-size: 16px;
    color: #383838;
    text-align: justify;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    padding-top: 10px;
    font-family: ${({theme})=> theme.FONTS.SUBTITLE};
    
`;

export const TextInput = styled.TextInput`
    width: 90%;
    height: 40px;
    font-size: 16px;
    color: black;
    
`;
