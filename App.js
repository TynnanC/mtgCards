import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import * as cardData from './data/newData.json';
import styles from './styles/homeScreen.js';
import { LinearGradient } from 'expo-linear-gradient';
import BoldText from './components/BoldText.js';



export default function App() {
  const [card, setCard] = useState('');
  const getSingleCard = () => {
    fetch(`https://api.scryfall.com/cards/random`)
      .then(response => response.json())
      .then(data => setCard(data));
  };
  if (card != '') {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['rgb(235,159,130)', 'rgb(245,231,185)']} style={styles.subcontainer}>
          <Image style={styles.image} source={{ uri: card.image_uris.normal }} />
          <Text><BoldText>Name:</BoldText> {card.name}</Text>
          <Text><BoldText>Power:</BoldText> {card.power}</Text>
          <Text><BoldText>Toughness:</BoldText> {card.toughness}</Text>
          <Text><BoldText>Abilities:</BoldText> {card.oracle_text}</Text>
          <Text><BoldText>Flavour Text:</BoldText> {card.flavor_text}</Text>
          <View style={styles.button}>
            <Button title="Random Card" onPress={getSingleCard} />
          </View>
          <StatusBar style="auto" />
        </LinearGradient>
      </SafeAreaView>
    );
  }
  else {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['rgb(235,159,130)', 'rgb(245,231,185)']} style={styles.subcontainer}>
          <View style={styles.button}>
            <Button title="Random Card" onPress={getSingleCard} />
          </View>
          <StatusBar style="auto" />
        </LinearGradient>
      </SafeAreaView>
    );
  }
}