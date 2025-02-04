import styled from 'styled-components/native';
import Theme, {SPACING} from '@/Theme';
import {widthPixel} from '@/Utils/Sizes';
import {ButtonProps} from '.';
import BodyText from '../Text/Body';

export const AppButton = styled.TouchableOpacity<ButtonProps>`
  height: ${({type, disabled}) => widthPixel(48)}px;
  width: 100%;
  border-radius: ${({type}) =>
    type === 'clear' || type === 'underline'
      ? widthPixel(2)
      : widthPixel(20)}px;
  background-color: ${({theme, type, disabled, genre, genreString}) =>
    disabled
      ? theme.colors.sys.onSurface
      : type === 'clear'
      ? 'transparent'
      : genreString
      ? genreString === 'action'
        ? theme.colors.sys.primary
        : genreString === 'comedy'
        ? theme.colors.sys.secondary
        : theme.colors.sys.tertiary
      : genre === 28
      ? theme.colors.sys.primary
      : genre === 35
      ? theme.colors.sys.secondary
      : theme.colors.sys.tertiary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-width: ${({type}) => (type === 'clear' ? widthPixel(2) : 0)}px;
  border-color: ${({theme, type}) =>
    type === 'clear' ? theme.colors.sys.outline : 'transparent'};
`;

export const Label = styled(BodyText)`
  color: ${({theme, type, disabled}) =>
    disabled
      ? theme.colors.sys.onSurface
      : type === 'clear' || type === 'underline'
      ? theme.colors.sys.primary
      : theme.colors.sys.onPrimary};
  text-align: center;
  flex: 1;
  text-decoration-line: ${({type}) =>
    type === 'underline' ? 'underline' : 'none'};
  text-decoration-color: ${({theme, type}) =>
    type === 'underline' ? theme.colors.sys.primary : 'transparent'};
  text-decoration-style: solid;
`;

export const Icon = styled.View`
  margin-right: ${SPACING[8]}px;
`;

export const Circle = styled.View`
  height: ${widthPixel(40)}px;
  width: ${widthPixel(40)}px;
  border-radius: ${widthPixel(16)}px;
`;
