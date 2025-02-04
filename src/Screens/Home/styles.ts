import styled from 'styled-components/native';
import {widthPixel} from '@/Utils/Sizes';
import {FlatList} from 'react-native';
import {Item} from '@/Services/Queries';
import FastImage from 'react-native-fast-image';

export const StyledFlatList = styled(
  FlatList as new () => FlatList<Item>,
).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  snapToAlignment: 'start',
  snapToInterval: widthPixel(270) + widthPixel(10),
  decelerationRate: 'fast',
  bounces: false,
  disableIntervalMomentum: true,
  scrollEventThrottle: 16,
  contentContainerStyle: {
    paddingVertical: 10,
    paddingHorizontal: widthPixel(10),
  },
})`
  flex-grow: 0;
`;

export const ItemContainer = styled(FastImage)`
  width: ${widthPixel(270)}px;
  height: ${widthPixel(150)}px;
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
  width: ${widthPixel(270)}px;
  overflow: hidden;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
