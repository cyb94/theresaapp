import styled from 'styled-components/native';
import {widthPixel} from '@/Utils/Sizes';
import FastImage from 'react-native-fast-image';

export const ItemContainer = styled(FastImage)<{wishlist?: boolean}>`
  width: ${({wishlist}) => widthPixel(wishlist ? 310 : 270)}px;
  height: ${({wishlist}) => widthPixel(wishlist ? 200 : 150)}px;
  padding: ${widthPixel(10)}px;
  border-radius: ${widthPixel(8)}px;
  background-color: white;

  shadow-color: black;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.4px;
  shadow-radius: 3px;

  elevation: 5;
`;

export const Wrapper = styled.TouchableOpacity`
  width: ${({wishlist}) => widthPixel(wishlist ? 310 : 270)}px;
  overflow: hidden;
`;
