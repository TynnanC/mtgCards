import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import * as cardData from './data/newData.json';
import styles from './styles/homeScreen.js';
import { LinearGradient } from 'expo-linear-gradient';
import BoldText from './components/BoldText.js';

export default function App() {
  const [cardId, setCardId] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['rgb(235,159,130)', 'rgb(245,231,185)']} style={styles.subcontainer}>
        <Image style={styles.image} source={{ uri: cardData[cardId].image_uris.normal }} />
        <Text><BoldText>Name:</BoldText> {cardData[cardId].name}</Text>
        <Text><BoldText>Power:</BoldText> {cardData[cardId].power}</Text>
        <Text><BoldText>Toughness:</BoldText> {cardData[cardId].toughness}</Text>
        <Text><BoldText>Abilities:</BoldText> {cardData[cardId].oracle_text}</Text>
        <Text><BoldText>Flavour Text:</BoldText> {cardData[cardId].flavor_text}</Text>
        <View style={styles.button}>
          <Button title="random card name" onPress={() => setCardId(Math.floor(Math.random() * Object.keys(cardData).length))} />
        </View>
        <StatusBar style="auto" />
      </LinearGradient>
    </SafeAreaView>
  );
}