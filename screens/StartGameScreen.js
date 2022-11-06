import { useState } from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Color from '../constants/Color.js';
import Card from '../components/ui/Card';
import TextInstruction from '../components/ui/TextInstruction';

function StartGameScreen({onPickedNumber}){
    const [enteredNumber, SetEnteredNumber]=useState('');

    function NumberInputHandler(enteredText){
        SetEnteredNumber(enteredText)
    };
    function ResetInputNumber(){
        SetEnteredNumber('');
    };
    function ConfirmInputHandler(){
        const chosenNumber=parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Value',
            'The Number should be between 1 to 99', 
            [{text:'Okay', style:'destructive', onPress: ResetInputNumber}]);

            return; 
        }
        onPickedNumber(chosenNumber);
        
    };
    return (
   <View style={styles.rootContainer}>
    <Title>Guess My Number</Title>
       <Card>
        <TextInstruction>Enter a Number</TextInstruction>
        <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType="number-pad"
        onChangeText={NumberInputHandler}
        value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={ResetInputNumber}>Reset</PrimaryButton>
            </View>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={ConfirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </Card>
    </View>

    );

}

export default StartGameScreen;
const styles = StyleSheet.create({
   rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:'center'
   },

    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:Color.accent500,
        borderBottomWidth:2,
        color: Color.accent500,
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }

});