import React, {useEffect, useMemo} from 'react';
import {AppButton, Label} from './styles';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ExtendedTheme, useTheme} from '@react-navigation/native';

export type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  circleIcon?: React.ReactNode;
  type?: 'primary' | 'clear' | 'underline';
  size?: 'lg' | 'med' | 'sm';
  theme?: ExtendedTheme;
  genre?: number;
  genreString?: string;
};

const Button = ({
  style,
  label,
  onPress,
  disabled,
  labelStyle,
  type = 'primary',
  size = 'lg',
  genre,
  genreString,
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <AppButton
      theme={theme}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.5}
      type={type}
      genre={genre}
      genreString={genreString}>
      <Label
        theme={theme}
        disabled={disabled}
        label={label}
        type={type}
        size={size}
        style={labelStyle}
        genre={genre}
        genreString={genreString}
      />
    </AppButton>
  );
};

export default Button;
