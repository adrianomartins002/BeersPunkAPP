import { Text } from "react-native";
import styled from "styled-components/native";

export type SizeProps = 'small' | 'medium' | 'large'

type Props = {
    size?: SizeProps
}

export const Label = styled(Text).attrs<Props>(({size})=>({
    fontSize: size === "small" ? '14px' : (size === "medium" ? '16px' : '24px')
}))<Props>`
    font-size: 32px;
    fontSize: ${({theme, size})=> size === "small" ? '14px' : (size === "medium" ? '16px' : '24px')}
    font-weight: bold;
    color: ${({theme})=>theme.COLORS.TITLE};
    font-family: ${({theme})=> theme.FONTS.TITLE};
`;