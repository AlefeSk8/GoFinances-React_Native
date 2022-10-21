import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 13px 24px;
    background-color: ${({ theme }) => theme.COLORS.SHAPE};

    border-left-width: 5px;
    border-left-color: ${({ color }:any) => color};
    margin-bottom: 8px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM};
    `};
`;

export const Amount = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM};
    `};
`;