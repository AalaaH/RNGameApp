import {useState} from 'react';
import { StyleSheet ,ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen.js';
import GameScreen from './screens/GameScreen';
import Color from './constants/Color';
import GameOverScreen from './screens/GameOverScreen.js';

export default function App() {
  const [UserNumber, SetUserNumber]=useState();
  const [GameIsOver, setGameIsOver]=useState(true);
  const [guessRound, setGuessRound]=useState(0);

  function pickedNumberHandler(pickedNumber)
  {
    SetUserNumber(pickedNumber);
    setGameIsOver(false);

  }
  function GameOverHandler(numberOfRound){
    setGameIsOver(true);
    setGuessRound(numberOfRound);
  }
  function StartNewGameHandler(){
    SetUserNumber(null);
    setGuessRound(0);

  }
  let screen= <StartGameScreen onPickedNumber= {pickedNumberHandler}/>

  if (UserNumber) {
    screen=(<GameScreen 
      userNumber={UserNumber} 
      OnGameOver={GameOverHandler}/>);
  }
  if (GameIsOver && UserNumber){
    screen= (<GameOverScreen 
      userNumber={UserNumber} 
      roundNumber={guessRound} 
      onStartNewGame={StartNewGameHandler}></GameOverScreen>);
  }
  return (
     <LinearGradient 
     colors={[Color.Primary700, Color.accent500]} 
     style={styles.screenRoot}>
      <ImageBackground source={require('./assets/images/background.jpg')}
      resizeMode="cover"
      style={styles.screenRoot}
      imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.screenRoot}>{screen}</SafeAreaView>
      </ImageBackground>
      </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
 screenRoot:{
  flex:1,
 },
 backgroundImage:{
  opacity:0.15
 }
});
