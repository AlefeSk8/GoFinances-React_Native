import styled, { css } from 'styled-components/native';



export const Container = styled.View`
  width: 100%;
  height: 9%;
  
  background-color: ${({ theme }) => theme.COLORS.PRIMARY}
`;

export const HeaderCategory = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.TEXT_WHITE};
  `};
  margin-top: 25px;
`;