import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.COLORS.ALERT_800};
`;
