import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

type Props = {
    type: 'up' | 'down' | 'total';
}

export const Container = styled.TouchableOpacity<Props>`
    width: 300px;
    height: 185px;
    border-radius: 6px;
    margin-left: 24px;

    padding: 20px;

    background-color: ${({ theme, type }) => (
        type === 'total' ? theme.COLORS.SECONDARY : theme.COLORS.SHAPE
    )};
`;

export const Header = styled.View`
    flex-direction: row;
    height: 76px;
`;

export const Title = styled.Text<Props>`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM};
    `};
    color: ${({ theme, type }) => (
        type === 'total' ? theme.COLORS.SHAPE : theme.COLORS.TITLE
    )};
    flex: 1;
`;

export const Icon = styled(Feather).attrs(() => ({
        size: 40,
    }))<Props>`
    
    ${({ type }) => type === 'up' && css`
        color: ${({ theme }) => theme.COLORS.SUCCESS}
    `};

    ${({ type }) => type === 'down' && css`
        color: ${({ theme }) => theme.COLORS.ATTENTION}
    `};

    ${({ type }) => type === 'total' && css`
        color: ${({ theme }) => theme.COLORS.SHAPE}
    `};
`;

export const Amount = styled.Text<Props>`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.XXL};
    `};
    color: ${({ theme, type }) => (
        type === 'total' ? theme.COLORS.SHAPE : theme.COLORS.TITLE
    )};
`;

export const LastTransaction = styled.Text<Props>`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.XS};
        color: ${theme.COLORS.TEXT};
    `};
    color: ${({ theme, type }) => (
        type === 'total' ? theme.COLORS.SHAPE : theme.COLORS.TEXT
    )};
`;