import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const ChartContainer = styled.View`
    width: 100%;
    align-items: center;
`;

export const Content = styled.ScrollView`
    padding: 24px;
    flex: 1
`;

export const MonthSelect = styled.View`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const MonthSelectButton = styled.TouchableOpacity`
    flex-direction: row;
`;

export const SelectIcon = styled(Feather).attrs({
    size: 24,
})`

`;

export const Month = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.TITLE};
    `};
`;
