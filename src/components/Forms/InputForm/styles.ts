import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
`;

export const Error = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.ATTENTION};
        font-size: ${theme.FONT_SIZE.SM};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
    margin-bottom: 12px;
    align-items: start;
`;