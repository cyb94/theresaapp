import '@react-navigation/native';
import {Theme} from '@react-navigation/native';

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
  export type ExtendedTheme = Theme & {
    dark: boolean;
    colors: {
      white: string;
      black: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      primary: string;
      secondary: string;
      background: string;
      gradient1: string;
      gradient2: string;
      sys: {
        primary: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        secondary: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        background: string;
        onBackground: string;
        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
        outline: string;
        inverseOnSurface: string;
        inverseSurface: string;
        inversePrimary: string;
        shadow: string;
        surfaceTint: string;
        outlineVariant: string;
        scrim: string;
        primaryFixed: string;
        onPrimaryFixed: string;
        primaryFixedDim: string;
        onPrimaryFixedVariant: string;
        secondaryFixed: string;
        onSecondaryFixed: string;
        secondaryFixedDim: string;
        onSecondaryFixedVariant: string;
        tertiaryFixed: string;
        onTertiaryFixed: string;
        tertiaryFixedDim;
        onTertiaryFixedVariant: string;
        surfaceDim: string;
        surfaceBright: string;
        surfaceContainerLowest: string;
        surfaceContainerLow: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
        tertiaryFixedDim: string;
      };
      palettes: {
        primary: {
          0: string;
          5: string;
          10: string;
          15: string;
          20: string;
          25: string;
          30: string;
          35: string;
          40: string;
          50: string;
          60: string;
          70: string;
          80: string;
          90: string;
          95: string;
          98: string;
          99: string;
          100: string;
        };
        secondary: {
          0: string;
          5: string;
          10: string;
          15: string;
          20: string;
          25: string;
          30: string;
          35: string;
          40: string;
          50: string;
          60: string;
          70: string;
          80: string;
          90: string;
          95: string;
          98: string;
          99: string;
          100: string;
        };
        tertiary: {
          0: string;
          5: string;
          10: string;
          15: string;
          20: string;
          25: string;
          30: string;
          35: string;
          40: string;
          50: string;
          60: string;
          70: string;
          80: string;
          90: string;
          95: string;
          98: string;
          99: string;
          100: string;
        };
        neutral: {
          0: string;
          5: string;
          10: string;
          15: string;
          20: string;
          25: string;
          30: string;
          35: string;
          40: string;
          50: string;
          60: string;
          70: string;
          80: string;
          90: string;
          95: string;
          98: string;
          99: string;
          100: string;
        };
        'neutral-variant': {
          0: string;
          5: string;
          10: string;
          15: string;
          20: string;
          25: string;
          30: string;
          35: string;
          40: string;
          50: string;
          60: string;
          70: string;
          80: string;
          90: string;
          95: string;
          98: string;
          99: string;
          100: string;
        };
      };
      surfaces: {
        main: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
      };
      slate: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      gray: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      zinc: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      neutral: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      stone: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      red: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      orange: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      amber: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      yellow: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      lime: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      green: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      emerald: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      teal: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      cyan: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      sky: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      indigo: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      violet: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      purple: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      fuchsia: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      pink: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      blue: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      rose: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      turquoise: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
  };
  export function useTheme(): ExtendedTheme;
}
