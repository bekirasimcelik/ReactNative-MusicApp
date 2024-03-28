import React, {useState} from 'react';
import {SafeAreaView, FlatList, Text, View, Button, Switch} from 'react-native';

const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe.exe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: 'Rock n Code', isFavorite: true},
  {id: 4, name: 'do(drink)', isFavorite: false},
  {id: 5, name: 'esc', isFavorite: false},
];

function App() {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function onFavoritesChanges(isFavoriteSelected) {
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data);
  }

  return (
    <SafeAreaView>
      <View style={{margin: 10}} />
      <Text>Show Only Favourites</Text>
      <Switch value={showOnlyFavorites} onValueChange={onFavoritesChanges} />
      <FlatList
        data={cafeList}
        renderItem={({item}) => <Text style={{fontSize: 25}}>{item.name}</Text>}
      />
    </SafeAreaView>
  );
}

export default App;
