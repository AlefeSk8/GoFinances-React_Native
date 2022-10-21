import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

type CategoryProps = {
    isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Section = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    flex-direction: row;
    height: 56px;
    padding: 15px;
    margin-bottom: 1px;
    border-radius: 5px;
    ${({ theme }) => css`
        background-color: ${theme.COLORS.SHAPE};
    `};
    background-color: ${({ isActive, theme }) => (
        isActive ? theme.COLORS.SECONDARY_LIGHT : theme.COLORS.SHAPE
    )};
    align-items: center;
`;

export const Name = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.TITLE};
    `};
    
`;

export const Icon = styled(Feather).attrs({
    size: 20,
})`
    color: ${({ theme }) => theme.COLORS.TITLE};
    margin-right: 15px;
`;

export const Footer = styled.View`
    width: 100%;
    height: 12%;
    padding: 0 24px;
`;