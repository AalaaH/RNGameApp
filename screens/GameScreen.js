import { useEffect, useState } from 'react';
import {View, StyleSheet, Alert, FlatList, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import TextInstruction from '../components/ui/TextInstruction';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min,max,exlude){
    
    const rndNum=Math.floor(Math.random()*(max-min))+min;
    if (rndNum==exlude){
        return generateRandomBetween(min,max,exlude);
    }else{
        return rndNum;
    }
};
let maxBoundry=100;
let MinBoundry=1;

function GameScreen({userNumber, OnGameOver}){
    const initialGuess=generateRandomBetween(1,100,userNumber);
    const [currentGuess,SetcurrentGuess]=useState(initialGuess);
    const [guessRoundNumber, setGuessRoundNumer]= useState([initialGuess]);
   
    useEffect(()=> {
        if (currentGuess=== userNumber){
            OnGameOver(guessRoundNumber.length);
        }
    },[currentGuess,userNumber,OnGameOver]);

    useEffect(()=>{
        MinBoundry=1;
        maxBoundry=100;
    },[]);

    function GuessNextNumberHandler(Direction){
        this
        if((Direction==='lower' && currentGuess<userNumber)
        || (Direction==='greater' && currentGuess>userNumber))
        {
            Alert.alert("Don't Lie!", "You know that is worng....",
            [{text: 'Sorry!!', style: 'cancel'}]);
            return;
        }
        if(Direction==='lower'){
            maxBoundry= currentGuess;
        }else{
            MinBoundry=currentGuess+1;
        }
        const newRndNumber=generateRandomBetween(
            MinBoundry,maxBoundry,currentGuess);
        SetcurrentGuess(newRndNumber);
        setGuessRoundNumer((PrevRoundNumber) => [newRndNumber, ...PrevRoundNumber]);
    };
    const guessListLength=guessRoundNumber.length;

    return( <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
        <TextInstruction  style={styles.textinstruction}>Higher or Lower?</TextInstruction>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
        <PrimaryButton onPress={GuessNextNumberHandler.bind(this,'lower')}>
            <Ionicons name='md-remove' size={24} color="white"/>
        </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}> 
        <PrimaryButton onPress={GuessNextNumberHandler.bind(this,'greater')}>
        <Ionicons name='md-add' size={24} color="white"/>
        </PrimaryButton>
        </View>
        </View>
        </Card>
        <View style={styles.listcontainer}>
            <FlatList 
            data={guessRoundNumber}
            renderItem={(itemData)=> (
            <GuessLogItem 
            roundNumber={guessListLength- itemData.index}  
            guess={itemData.item}/> )}
            keyExtractor={(item)=> item}>
            </FlatList>
        </View>
    </View>
    )
};

export default GameScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:12
    },
    textinstruction:{
        marginBottom:12
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    },
    listcontainer:{
        flex:1,
        padding:16
    }
});