import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import * as cardData from './data/newData.json';
import styles from './styles/homeScreen.js';

export default function App() {
  const [cardId, setCardId] = useState(0);
  //
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: cardData[cardId].image_uris.normal }} />
      <Text>Name: {cardData[cardId].name}</Text>
      <Text>Power: {cardData[cardId].power}</Text>
      <Text>Toughness: {cardData[cardId].toughness}</Text>
      <Text>Abilities: {cardData[cardId].oracle_text}</Text>
      <Text>Flavour Text: {cardData[cardId].flavor_text}</Text>
      <View style={styles.button}>
        <Button title="random card name" onPress={() => setCardId(Math.floor(Math.random() * Object.keys(cardData).length))} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}