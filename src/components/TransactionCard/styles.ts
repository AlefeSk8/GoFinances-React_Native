import styled, { css } from 'styled-components/native';
import styledAlt from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type Props = {
    type: 'Income' | 'Outcome';
}

export const Container = styledAlt(TouchableOpacity)`
    width: 100%;
    height: 128px;
    border-radius: 6px;
    margin-bottom: 16px;

    padding: 16px 24px;

    background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Header = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM};
        color: ${theme.COLORS.TITLE};
    `};
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
    size: 20,
    color: theme.COLORS.TEXT,
}))`

`;

export const Amount = styled.Text<Props>`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.XL};
    `};
    color: ${({ theme, type }) => (
        type === 'Income' ? theme.COLORS.SUCCESS : theme.COLORS.ATTENTION
    )};
    margin-top: 4px
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Category = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.XS};
        color: ${theme.COLORS.TEXT};
    `};
    flex: 1;
    margin-left: 5px;
`;    

export const DataOfTransaction = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.XS};
        color: ${theme.COLORS.TEXT};
    `};
`;
