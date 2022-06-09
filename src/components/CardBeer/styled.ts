import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex: 1;
    height: 250px;
    /* border-radius: 14px; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`;

export const ContainerText = styled.View`
    width: 70%;
    display: flex;
    padding-bottom: 60px;
    justify-content:center;
    align-items: flex-start;
    padding-left: 30px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-weight: bold;  
    color: #FFF;
    margin-bottom: 6px;
`;

export const TagLine = styled.Text`
    font-size: 16px;
    
    font-family: ${({ theme }) => theme.FONTS.SUBTITLE};
    color: #FEFEFE;
`;

export const ContainerNumbers = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: flex-start;
    margin-top: 4px;
`;

export const Label = styled.Text`
    font-size: 14px;
    
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: #FEFEFE;
    `;

export const Number = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: yellow;
`;