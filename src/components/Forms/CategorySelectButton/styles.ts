import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity.attrs({
    
})`
    width: 100%;
    height: 56px;
    padding: 15px;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    ${({ theme }) => css`
        background-color: ${theme.COLORS.SHAPE};
    `};

`;

export const Category = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM};
        color: ${theme.COLORS.TEXT};
    `};
`;

export const Icon = styled(Feather).attrs({
    size: 20,
    name: 'chevron-down'
})`
    color: ${({ theme }) => theme.COLORS.TEXT}
`;