import React, {useEffect} from 'react';
import {useAppDispatch, useAppNavigation, usecheckList} from '@/Hooks';
import {DetailsScreenProps} from '@/Utils/Navigation';
import FastImage from 'react-native-fast-image';
import Button from '@/Components/Button';
import BodyText from '@/Components/Text/Body';
import {addItem, removeItem, resetItems} from '@/Store/Items';
import {DetailsImage, Row, Scroll, SummarySection} from './styles';
import {useTheme} from '@react-navigation/native';
import Fonts from '@/Assets';
import {Platform} from 'react-native';

type DetailsProps = {
  route: DetailsScreenProps;
};

const targetIds = [28, 35, 36];

const getFirstMatchingGenre = (genreIds: any[]) => {
  return genreIds.find(id => targetIds.includes(id));
};

const Details: React.FC<DetailsProps> = ({route}) => {
  const {item, genre} = route.params;
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const isOnWislist = usecheckList(item.id);
  const theme = useTheme();
  const movieGenre = getFirstMatchingGenre(item.genre_ids);

  console.log(genre);

  const onPress = () => {
    if (isOnWislist) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(addItem(item));
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: item?.title,
    });
  }, []);

  const colorForText = genre
    ? genre === 'action'
      ? theme.colors.sys.primary
      : genre === 'comedy'
      ? theme.colors.sys.secondary
      : theme.colors.sys.tertiary
    : movieGenre === 28
    ? theme.colors.sys.primary
    : movieGenre === 35
    ? theme.colors.sys.secondary
    : theme.colors.sys.tertiary;

  const fontText = genre
    ? genre === 'action'
      ? Fonts.NunitoBold
      : genre === 'comedy'
      ? Fonts.Montserrat_Bold
      : Platform.OS === 'ios'
      ? 'Didot'
      : 'Roboto'
    : movieGenre === 28
    ? Fonts.NunitoBold
    : movieGenre === 35
    ? Fonts.Montserrat_Bold
    : Platform.OS === 'ios'
    ? 'Didot'
    : 'Roboto';

  return (
    <Scroll>
      <Row>
        <DetailsImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <SummarySection>
          <Button
            label={`${isOnWislist ? 'Rmv. from' : 'Add to'} wishlist`}
            type={'primary'}
            onPress={onPress}
            genre={movieGenre}
            genreString={genre}
          />
          <BodyText
            style={{color: colorForText, fontFamily: fontText}}
            label={item.overview}
            type="sm"
          />
        </SummarySection>
      </Row>
      <BodyText
        style={{color: colorForText, fontFamily: fontText}}
        label={`Language: ${item.original_language}`}
        type="sm"
      />
      <BodyText
        style={{color: colorForText, fontFamily: fontText}}
        label={`Original Title: ${item.original_title}`}
        type="sm"
      />
      <BodyText
        style={{color: colorForText, fontFamily: fontText}}
        label={`Popularity: ${item.popularity}`}
        type="sm"
      />
      <BodyText
        style={{color: colorForText, fontFamily: fontText}}
        label={`Vote: ${item.vote_average} / 10`}
        type="sm"
      />
      <BodyText
        style={{color: colorForText, fontFamily: fontText}}
        label={`Vote count: ${item.vote_count}`}
        type="sm"
      />
      <BodyText
        style={{color: colorForText, fontFamily: fontText}}
        label={`Rated R: ${item.adult ? 'Yes' : 'No'}`}
        type="sm"
      />
      <BodyText
        style={{color: colorForText, fontFamily: fontText}}
        label={`Released date: ${item.release_date}`}
        type="sm"
      />
    </Scroll>
  );
};

export default Details;
