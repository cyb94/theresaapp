import React from 'react';
import {TextStyled} from './styles';
import {StyleProp, Text, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface TextProps {
  label: string;
  style?: StyleProp<TextStyle>;
  type: 'lg' | 'med' | 'sm';
  numberOfLines?: number;
}

const Title = ({label, style, type = 'lg', numberOfLines}: TextProps) => {
  const theme = useTheme();
  return (
    <TextStyled
      theme={theme}
      numberOfLines={numberOfLines}
      type={type}
      style={style}>
      {label}
    </TextStyled>
  );
};

export default Title;
