import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View.attrs(() => ({
  paddingVertical: Platform.OS === 'ios' ? 10 : 38,
}))`
  width: 100%;
  height: 29%;
  
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0 24px;
`;

export const Photo = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;

export const UserInfo = styled.View`
  flex: 1;
  min-height: 48px;
  max-height: 48px;
  margin-left: 16px;
`;

export const UserGreetings = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.TEXT_WHITE};
  `};
  
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.TEXT_WHITE};
  `};
  
`;

export const LogoutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  min-height: 48px;
  max-height: 48px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
    color: theme.COLORS.SECONDARY,
    size: 24,
}))`

`;

export const Highlight = styled.View`
  
  width: 100%;
  height: 185px;
  
  margin-top: 24px;
  margin-bottom: 20px;
`;

export const Section = styled.View`
  padding: 0 24px;
  min-height: 500px;
  max-height: 500px;

  justify-content: center;
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG};
    color: ${theme.COLORS.TITLE};
  `};
  margin-bottom: 20px;
`;