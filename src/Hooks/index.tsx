import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootStackParamList} from '@/Navigator';
import type {RootState, AppDispatch} from '../Store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export type AppNav = StackNavigationProp<RootStackParamList>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppNavigation = () =>
  useNavigation<StackNavigationProp<RootStackParamList>>();

// export const useSystemTheme = () => {
//   const systemTheme = useAppSelector(
//     (state: any) => state.uiReducer.useSystemTheme,
//   );
//   return systemTheme;
// };

// export const useDefaultTheme = () => {
//   const defaultTheme = useAppSelector(
//     (state: any) => state.uiReducer.defaultTheme,
//   );
//   return defaultTheme;
// };

export const useWishlist = () => {
  const list = useAppSelector(state => state.itemsReducer.items);

  return list;
};

export const usecheckList = id => {
  const list = useAppSelector(state => state.itemsReducer.items);
  const check = list?.find(item => item.id == id);
  return check;
};
