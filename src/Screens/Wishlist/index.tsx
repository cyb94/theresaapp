import React from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import {useAppNavigation, useWishlist} from '@/Hooks';
import {Item} from '@/Services/Queries';
import Title from '@/Components/Text/Title';
import MovieItem from '@/Components/Item';

type WishlistProps = {};
const Wishlist = ({}: WishlistProps) => {
  const list = useWishlist();

  const renderItem: ListRenderItem<Item> = ({item}) => {
    return <MovieItem wishlist item={item} />;
  };
  return (
    <View>
      <FlatList
        style={{height: '100%'}}
        contentContainerStyle={{alignSelf: 'center'}}
        data={list}
        renderItem={renderItem}
        ListEmptyComponent={<Title type="lg" label={'No items here'} />}
      />
    </View>
  );
};

export default Wishlist;
