import styled from 'styled-components/native';


export const Container = styled.View`
    width: 100%;
    height: 70%;
    align-self: center;
    background-color: #FFF;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    align-items: center;
    
    `;

export const LineClose = styled.TouchableOpacity`
    width: 100px;
    height: 8px;
    background-color: #ede7e6;
    border-radius: 10px;
    margin-top: 6px;
    `;

export const ContainerFilter = styled.View`
    width: 100%;
    height: 80%;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;

`;

export const FoodMatch = styled.TextInput`
    width: 100%;
    height: 50px;
    background-color: #ede7e6;
    border-radius: 10px;
`;

export const ButtonApplyFiltersContainer = styled.TouchableOpacity`
    width: 100%;
    height: 60px;   
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.COLORS.TITLE};
    border-radius: 40px;
`;

export const ButtonApplyFiltersText = styled.Text`
    width: 50%;
    font-size: 20px;
    color: ${({theme})=>theme.COLORS.SUCCESS_50};
    font-family: ${({theme})=>theme.FONTS.TITLE};;
`;

