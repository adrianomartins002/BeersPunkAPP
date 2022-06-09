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
    height: 84%;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;

`;

export const FoodMatch = styled.TextInput`
    width: 100%;
    height: 50px;
    background-color: #ede7e6;
    border-radius: 10px;
`;

export const ButtonApplyFilters = styled.Button`
    width: 70%;
    height: 40px;
   
`;

