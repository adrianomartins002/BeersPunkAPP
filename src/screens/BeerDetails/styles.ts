import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${({theme})=>theme.COLORS.TITLE};
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: flex-start; */
   
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: 18%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
   
`;

export const ButtonContainer = styled.TouchableOpacity`
    width: 70px;
    position: absolute;
    padding-top: 20px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Title = styled.Text`
    width: 100%;
    /* font-family: ${({ theme }) => theme.FONTS.TITLE}; */
    font-weight: bold;
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    justify-content: center;
    text-align: center;
    padding-left: 20px;
    
`;

export const Subtitle = styled.Text`
    /* font-family: ${({ theme }) => theme.FONTS.TITLE}; */
    font-weight: bold;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.SUBTITLE}
`;

export const ContainerDetails = styled.View`
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
    
`;

export const TitleDetails = styled.Text`
    width: 90%;
    height: 30%;
    /* font-family: ${({ theme }) => theme.FONTS.TITLE}; */
    font-weight: bold;
    font-size: 30px;
    justify-content: center;
    text-align: center;
`;

export const ContainerSpecifications = styled.View`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 40px;
    padding-left: 40px;
`;

export const ContainerSpecification = styled.View`
    width: 20%;
    margin-left: 20px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


export const Label = styled.Text`
    /* font-family: ${({ theme }) => theme.FONTS.TITLE}; */
    font-weight: bold;
    font-size: 20px;
`;

export const Value = styled.Text`
    /* font-family: ${({ theme }) => theme.FONTS.TEXT}; */
    font-size: 24px;
    color: ${({theme})=>theme.COLORS.PRIMARY_900};
`;

export const DetailsText = styled.Text`
    width: 100%;
    height: 80%;
    /* font-family: ${({ theme }) => theme.FONTS.SUBTITLE}; */
    font-size: 18px;
    color: ${({theme})=>theme.COLORS.SUBTITLE};
    text-align: justify;
    padding-right: 40px;
    padding-left: 40px;
`;