import styled from "styled-components/native";

export const Title = styled.Text.attrs(({theme})=>({
    color: theme.COLORS.TITLE
}))`
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    font-family: ${({theme})=> theme.FONTS.TITLE};
    
`;