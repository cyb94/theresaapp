import {Item} from '@/Services/Queries';
import Title from '../Text/Title';
import {ItemContainer, Wrapper} from './styles';
import FastImage from 'react-native-fast-image';
import {useAppNavigation} from '@/Hooks';

const MovieItem = ({item, wishlist}: {item: Item; wishlist: boolean}) => {
  const navigation = useAppNavigation();

  const onPressItem = () => {
    navigation.navigate('Details', {item: item});
  };

  return (
    <Wrapper wishlist={wishlist} onPress={onPressItem}>
      <Title numberOfLines={1} label={item.title} type={'med'} />
      <ItemContainer
        wishlist={wishlist}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}></ItemContainer>
    </Wrapper>
  );
};

export default MovieItem;
