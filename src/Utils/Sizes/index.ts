import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// const fontScale = PixelRatio.getFontScale();

const widthBaseScale = SCREEN_WIDTH / 390;
const heightBaseScale = SCREEN_HEIGHT / 844;

function normalize(size: number, based = 'width', scalePercent = 100) {
  const scale = based === 'height' ? heightBaseScale : widthBaseScale;
  const percentScale =
    scale - 1 > 0 ? ((scale - 1) * scalePercent) / 100 + 1 : scale;
  const newSize = size * percentScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};
//for font  pixel
const fontPixel = (size: number) => {
  return widthPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};

//for half scale vertical pixel
const iconScale = (size: number) => {
  return normalize(size, 'height', 50);
};
//for half scale horizontal pixel
const scaledHeightPixel = (size: number, percentage: number) => {
  return normalize(size, 'height', percentage);
};

export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  iconScale,
  scaledHeightPixel,
};
