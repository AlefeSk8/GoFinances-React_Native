import styled, { css } from 'styled-components/native';

export const ButtonSpace = styled.TouchableOpacity.attrs({

})`
    border-radius: 5px;
    height: 56px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`;

export const ButtonText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.TEXT_WHITE};
    `};
    
`;