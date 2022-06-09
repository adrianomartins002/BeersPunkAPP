import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex: 1;
    height: 240px;
    margin: 2px;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_SECONDARY};
`;

export const Title = styled.Text`
    font-size: 18px;
    font-family: ${({theme})=> theme.FONTS.TITLE};
    font-weight: bold;  
    color: #FFF;
    margin-bottom: 20px;
`;

export const TagLine = styled.Text`
    font-size: 14px;
    font-weight: normal;
    color: #FEFEFE;
`;