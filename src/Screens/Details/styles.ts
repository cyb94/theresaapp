import {widthPixel} from '@/Utils/Sizes';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  padding: 0px ${widthPixel(10)}px;
`;

export const DetailsImage = styled(FastImage)`
  width: ${widthPixel(200)}px;
  height: ${widthPixel(200)}px;
  border-radius: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const SummarySection = styled.View`
  flex: 1;
  margin-left: 10px;
`;
