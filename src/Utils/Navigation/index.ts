import {RootStackParamList} from '@/Navigator';
import {
  createNavigationContainerRef,
  RouteProp,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(
  name: keyof RootStackParamList,
  params?: RootStackParamList[keyof RootStackParamList],
) {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
}
export type DetailsScreenProps = RouteProp<RootStackParamList, 'Details'>;
