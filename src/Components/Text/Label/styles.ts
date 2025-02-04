import styled from 'styled-components/native';
import Fonts from '../../../Assets';
import {DIMENSIONS} from '@/Theme';
import {ExtendedTheme} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextProps} from 'react-native';

const {height} = DIMENSIONS;

type TProps = TextProps & {
  size?: 'lg' | 'medH' | 'med' | 'sm';
  weight?: 'bold' | 'normal';
  theme: ExtendedTheme;
};

const getFontSize = (size: string) => {
  switch (size) {
    case 'lg':
      return RFValue(18, height);
    case 'medH':
      return RFValue(16, height);
    case 'med':
      return RFValue(15, height);
    case 'sm':
      return RFValue(13, height);
    default:
      return RFValue(15, height);
  }
};

const getLineHeight = (size: string) => {
  switch (size) {
    case 'lg':
      return RFValue(22, height);
    case 'medH':
      return RFValue(20, height);
    case 'med':
      return RFValue(18, height);
    case 'sm':
      return RFValue(16, height);
    default:
      return RFValue(18, height);
  }
};

const getFontFamily = (size: string) => {
  switch (size) {
    case 'lg':
      return Fonts.NunitoSemiBold;
    case 'medH':
      return Fonts.NunitoMedium;
    case 'med':
      return Fonts.NunitoMedium;
    case 'sm':
      return Fonts.NunitoMedium;
    default:
      return Fonts.NunitoMedium;
  }
};

export const TextStyled = styled.Text<TProps>`
  font-size: ${({size}) => getFontSize(size || 'med')}px;
  line-height: ${({size}) => getLineHeight(size || 'med')}px;
  letter-spacing: ${RFValue(0.3, height)}px;
  font-family: ${({size}) => getFontFamily(size || 'med')};
  color: ${({theme}) => theme.colors.sys.onSurface};
  font-weight: ${({weight}) => weight || 'normal'};
`;
