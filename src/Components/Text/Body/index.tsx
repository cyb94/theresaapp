import React from 'react';
import {StyleProp, TextStyle, TextProps} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {TextStyled} from './styles';

type STextProps = TextProps & {
  label: string;
  type: 'lg' | 'med' | 'sm';
  style?: StyleProp<TextStyle>;
  italic?: boolean;
  bold?: boolean;
};

const BodyText = ({
  label,
  style,
  type = 'lg',
  italic = false,
  bold = false,
  ...rest
}: STextProps) => {
  const theme = useTheme();

  return (
    <TextStyled
      theme={theme}
      type={type}
      italic={italic}
      bold={bold}
      style={style}
      {...rest}>
      {label}
    </TextStyled>
  );
};

export default BodyText;
