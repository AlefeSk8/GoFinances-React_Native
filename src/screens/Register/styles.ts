import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Section = styled.View`
    padding: 24px;
    flex: 1;
    justify-content: space-between;
`;

export const SectionContent = styled.View`
    width: 100%;
`;

export const ButtonContent = styled.View`
    width: 100%;
    height: 56px;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-top: 5px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Category = styled.TextInput.attrs({
    placeholder: 'Categoria'
})`
    width: 100%;
    height: 56px;
    padding: 15px;
    border-radius: 5px;
    ${({ theme }) => css`
        background-color: ${theme.COLORS.SHAPE};
    `};

`;

export const SendButton = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    padding: 15px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    ${({ theme }) => css`
        background-color: ${theme.COLORS.SECONDARY};
    `};
`;

export const SendButtonTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.SHAPE};
    `};
`;