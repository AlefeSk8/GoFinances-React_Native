import styled, { css } from 'styled-components/native';
import styledAlt from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type TypeProps = {
    type: 'Income' | 'Outcome';
    isActive: boolean;
}

export const Button = styledAlt(TouchableOpacity)<TypeProps>`
    width: 49%;
    height: 56px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${({ isActive } : TypeProps) => !isActive && css`
        border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
    `};
    ${({ isActive, type } : TypeProps) => isActive && type === 'Income' && css`
        background-color: ${({ theme}) => theme.COLORS.SUCCESS_LIGHT};
    `};
    ${({ isActive, type } : TypeProps) => isActive && type === 'Outcome' && css`
        background-color: ${({ theme}) => theme.COLORS.ATTENTION_LIGHT};
    `};
`;

export const Icon = styled(Feather).attrs({
    size: 24,
})`
    ${({ theme }) => css`
        color: ${({ type } : TypeProps) => (
            type === 'Outcome' ? theme.COLORS.ATTENTION : theme.COLORS.SUCCESS
        )};
    `};
    margin-right: 10px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.TITLE};
    `};
`;