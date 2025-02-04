import {StyleSheet, TouchableOpacity, useColorScheme} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {darkTheme, lightTheme} from '../Theme';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Item} from '@/Services/Queries';
import Details from '@/Screens/Details';
import Home from '@/Screens/Home';
import Wishlist from '@/Screens/Wishlist';
import BodyText from '@/Components/Text/Body';
import {useAppNavigation} from '@/Hooks';

const queryClient = new QueryClient();

export type RootStackParamList = {
  Home: any;
  Details: {
    item: Item;
    genre?: string;
  };
  Wishlist: any;
};

const AppStack = createStackNavigator<RootStackParamList>();

const AppStackScreens = () => {
  const navigation = useAppNavigation();

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };
  return (
    <AppStack.Navigator
      screenOptions={{
        presentation: 'card',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureVelocityImpact: 0.1,
      }}>
      <AppStack.Screen
        options={{
          headerBackImage: () => null,
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity onPress={goToWishlist}>
              <BodyText label={'Wishlist'} type={'med'} />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            paddingRight: 10,
          },
        }}
        name={'Home'}
        component={Home}
      />
      <AppStack.Screen
        options={{
          headerBackImage: () => null,
          headerShadowVisible: false,
          headerBackButtonDisplayMode: 'generic',
        }}
        name={'Details'}
        component={Details}
      />
      <AppStack.Screen
        options={{
          headerBackImage: () => null,
          headerShadowVisible: false,
          headerBackButtonDisplayMode: 'generic',
        }}
        name={'Wishlist'}
        component={Wishlist}
      />
    </AppStack.Navigator>
  );
};

const App = () => {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
          <AppStackScreens />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
