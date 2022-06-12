import { Text } from "react-native";
import styled from "styled-components/native";

export type SizeProps = 'small' | 'medium' | 'large'

type Props = {
    size?: SizeProps
}

export const Title = styled(Text).attrs<Props>(({size})=>({
    fontSize: size === "small" ? '24px' : (size === "medium" ? '28px' : '38px')
}))<Props>`
    font-size: 32px;
    font-weight: bold;
    color: ${({theme})=>theme.COLORS.TITLE};
    font-family: ${({theme})=> theme.FONTS.TITLE};
    margin-bottom: 10px;
`;