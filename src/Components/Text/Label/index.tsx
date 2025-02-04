import React from 'react';
import {TextStyled} from './styles';
import {StyleProp, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface TextProps {
  label: string;
  style?: StyleProp<TextStyle>;
  type: 'lg' | 'med' | 'sm' | 'medH';
  numberOfLines?: number;
  bold?: boolean;
}

const Label = ({
  label,
  style,
  type = 'lg',
  numberOfLines,
  bold = false,
}: TextProps) => {
  const theme = useTheme();

  return (
    <TextStyled
      theme={theme}
      numberOfLines={numberOfLines}
      type={type}
      bold={bold}
      style={style}>
      {label}
    </TextStyled>
  );
};

export default Label;
