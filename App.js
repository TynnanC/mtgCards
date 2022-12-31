import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import * as cardData from './data/newData.json';

export default function App() {
  const [cardId, setCardId] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Name: {cardData[cardId].name}</Text>
      <Text>Power: {cardData[cardId].power}</Text>
      <Text>Toughness: {cardData[cardId].toughness}</Text>
      <Text>Abilities: {cardData[cardId].oracle_text}</Text>
      <Text>Flavour Text: {cardData[cardId].flavor_text}</Text>
      <Button title="random card name" onPress={() => setCardId(Math.floor(Math.random() * Object.keys(cardData).length))} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
