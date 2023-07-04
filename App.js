import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
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
      <View style={styles.container}>
        <LinearGradient colors={['rgb(150,150,150)', 'rgb(50,50,50)']} style={styles.subcontainer}>
          <Image style={styles.image} source={{ uri: card.image_uris.normal }} />
          <View style={styles.textBox}>
            <Text><BoldText>Name:</BoldText> {card.name}</Text>
            <Text><BoldText>Power:</BoldText> {card.power}</Text>
            <Text><BoldText>Toughness:</BoldText> {card.toughness}</Text>
            <Text><BoldText>Abilities:</BoldText> {card.oracle_text}</Text>
            <Text><BoldText>Flavour Text:</BoldText> {card.flavor_text}</Text>
          </View>

          <View style={styles.randomButton}>
            <Button title="Random Card" onPress={getSingleCard} />
          </View>
          <StatusBar style="auto" />
        </LinearGradient>
      </View>
    );
  }
  else {
    return (
      <View style={styles.subcontainer}>
        <LinearGradient colors={['rgb(150,150,150)', 'rgb(50,50,50)']} style={styles.subcontainer}>
          <View style={styles.initialButton}>
            <Button title="Random Card" onPress={getSingleCard} />
          </View>
          <StatusBar style="auto" />
        </LinearGradient>
      </View>

    );
  }
}