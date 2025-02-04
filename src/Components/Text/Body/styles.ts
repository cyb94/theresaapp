import styled from 'styled-components/native';
import Fonts from '../../../Assets';
import {DIMENSIONS} from '@/Theme';
import {ExtendedTheme} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextProps} from 'react-native';

const {height} = DIMENSIONS;

export type TProps = TextProps & {
  size: 'lg' | 'med' | 'sm';
  weight?: 'bold' | 'normal';
  italic?: boolean;
  theme: ExtendedTheme;
};

const getFontSize = (size: string) => {
  switch (size) {
    case 'lg':
      return RFValue(18, height);
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
    case 'med':
      return RFValue(18, height);
    case 'sm':
      return RFValue(16, height);
    default:
      return RFValue(18, height);
  }
};

export const TextStyled = styled.Text<TProps>`
  font-size: ${({size}) => getFontSize(size || 'med')}px;
  line-height: ${({size}) => getLineHeight(size || 'med')}px;
  letter-spacing: ${RFValue(0.2, height)}px;
  font-family: ${({}) => Fonts.NunitoRegular};
  color: ${({theme}) => theme.colors.sys.primary};
  font-weight: ${({weight}) => weight || 'normal'};
  font-style: ${({italic}) => (italic ? 'italic' : 'normal')};
`;
