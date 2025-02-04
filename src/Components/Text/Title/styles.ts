import styled from 'styled-components/native';
import Fonts from '../../../Assets';
import {DIMENSIONS} from '@/Theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextProps} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

const {height} = DIMENSIONS;

type TProps = TextProps & {
  type?: 'lg' | 'med' | 'sm';
  theme: ExtendedTheme;
};

const getFontSize = (type: string) => {
  switch (type) {
    case 'lg':
      return RFValue(22, height);
    case 'med':
      return RFValue(16, height);
    case 'sm':
      return RFValue(14, height);
    default:
      return RFValue(16, height);
  }
};

const getLineHeight = (type: string) => {
  switch (type) {
    case 'lg':
      return RFValue(28, height);
    case 'med':
      return RFValue(24, height);
    case 'sm':
      return RFValue(20, height);
    default:
      return RFValue(24, height);
  }
};

const getFontFamily = (type: string) => {
  switch (type) {
    case 'lg':
      return Fonts.Montserrat_SemiBold;
    case 'med':
      return Fonts.Montserrat_Medium;
    case 'sm':
      return Fonts.Montserrat_Medium;
    default:
      return Fonts.Montserrat_Medium;
  }
};

export const TextStyled = styled.Text<TProps>`
  color: ${({theme}) => theme.colors.sys.onSurface};
  font-size: ${({type}) => getFontSize(type)}px;
  line-height: ${({type}) => getLineHeight(type)}px;
  letter-spacing: ${RFValue(0.4, height)}px;
  font-family: ${({type}) => getFontFamily(type)};
`;
