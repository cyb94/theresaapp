import styled from 'styled-components/native';
import {widthPixel} from '@/Utils/Sizes';

export const ItemContainer = styled.View`
  width: ${widthPixel(270)}px;
  height: ${widthPixel(150)}px;
  padding: ${widthPixel(10)}px;
  border-radius: ${widthPixel(8)}px;
  background-color: white;

  /* Shadow for iOS */
  shadow-color: black;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.4;
  shadow-radius: 3px;

  /* Elevation for Android */
  elevation: 5;
`;

export const Wrapper = styled.View`
  width: ${widthPixel(270)}px;
  overflow: hidden;
`;
