import React, {useEffect} from 'react';
import {View, ScrollView, ListRenderItem} from 'react-native';
import {ItemContainer, Scroll, StyledFlatList, Wrapper} from './styles';
import {
  Item,
  useActionFilms,
  useComedyFilms,
  useHistoryFilms,
} from '../../Services/Queries';
import Title from '@/Components/Text/Title';
import {useAppNavigation} from '@/Hooks';
import FastImage from 'react-native-fast-image';
import {widthPixel} from '@/Utils/Sizes';

type HomeProps = {};
const Home = ({}: HomeProps) => {
  const navigation = useAppNavigation();
  const {data} = useActionFilms();

  const {data: comedyData} = useComedyFilms();

  const {data: historyData} = useHistoryFilms();

  const goToDetails = (item: Item, genre: string) => {
    navigation.navigate('Details', {item, genre});
  };

  const renderItem = (item: Item, genre: string) => {
    const onPress = () => {
      goToDetails(item, genre);
    };

    return (
      <Wrapper onPress={onPress}>
        <Title numberOfLines={1} label={item.title} type={'med'} />
        <ItemContainer
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}></ItemContainer>
      </Wrapper>
    );
  };

  const Separator = () => {
    return <View style={{width: widthPixel(10)}}></View>;
  };

  return (
    <Scroll>
      <Title label={'Action Films'} type={'lg'} />
      <StyledFlatList
        ItemSeparatorComponent={Separator}
        data={data?.results}
        renderItem={({item}: {item: Item}) => renderItem(item, 'action')}
      />
      <Title label={'Comedy Films'} type={'lg'} />
      <StyledFlatList
        ItemSeparatorComponent={Separator}
        data={comedyData?.results}
        renderItem={({item}: {item: Item}) => renderItem(item, 'comedy')}
      />
      <Title label={'History Films'} type={'lg'} />
      <StyledFlatList
        ItemSeparatorComponent={Separator}
        data={historyData?.results}
        renderItem={({item}: {item: Item}) => renderItem(item, 'history')}
      />
    </Scroll>
  );
};

export default Home;
